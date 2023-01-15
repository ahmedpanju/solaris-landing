import React from "react";
import axios from "axios";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

import * as Styled from "./styles";

const Payment = () => {
  return (
    <div>
      <Styled.Label>Rp50,000</Styled.Label>
      <PaymentForm
        applicationId={process.env.REACT_APP_APP_ID}
        cardTokenizeResponseReceived={async (token, buyer) => {
          // const config = {
          //   headers: {
          //     Authorization: `Bearer EAAAENhMuZCKD1mPa0o40WJGGuuMU5tnxFZw0MHJolqMDhrCPV8ViPfnHXKFgNig`,
          //   },
          // };

          try {
            await axios.post(
              "http://localhost:8080/square/new-payment",
              {
                sourceId: token.token,
              }
              // config
            );
          } catch (error) {
            console.log("error");
          }
        }}
        createVerificationDetails={() => ({
          amount: "3.31",
          billingContact: {
            addressLines: ["123 Main Street", "Apartment 1"],
            familyName: "Doe",
            givenName: "John",
            countryCode: "GB",
            city: "London",
          },
          currencyCode: "USD",
          intent: "CHARGE",
        })}
        locationId={process.env.REACT_APP_LOCATION_ID}
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
};

export default Payment;
