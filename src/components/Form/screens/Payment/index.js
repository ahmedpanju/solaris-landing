import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import firebase from "firebase/compat/app";

import { AttendeesContext } from "../../../../context";

import * as Styled from "./styles";

const Payment = () => {
  const attendeesContext = useContext(AttendeesContext);

  return (
    <div>
      <Styled.Label>Rp50,000</Styled.Label>
      <PaymentForm
        applicationId={process.env.REACT_APP_APP_ID}
        cardTokenizeResponseReceived={async (token) => {
          try {
            const db = firebase.firestore();
            await axios.post(
              `${process.env.REACT_APP_API_URL}/square/new-payment`,
              {
                sourceId: token.token,
              }
            );
            await db
              .collection("attendees")
              .doc(attendeesContext.currentAttendeeIdState)
              .update({
                paid: true,
              });
            attendeesContext.setCurrentScreenState(
              attendeesContext.SCREENS.THANK_YOU
            );
          } catch (error) {
            toast.error("Something went wrong. Please try again");
          }
        }}
        locationId={process.env.REACT_APP_LOCATION_ID}
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
};

export default Payment;
