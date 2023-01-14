import React, { useState } from "react";
import { Flex } from "rebass";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

import * as Styled from "./styles";

const JOBS = {};

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    walletAddress: "",
    jobType: "",
  });

  return (
    <div>
      <Flex mb="30px">
        <Styled.Input label="Name" />
      </Flex>
      <Flex mb="30px">
        <Styled.Input label="Email" />
      </Flex>
      <Flex mb="30px">
        <Styled.Input label="Wallet Address" />
      </Flex>
      <PaymentForm
        applicationId="sandbox-sq0idb-NyYouwfgznIQYotX5bN3GA"
        cardTokenizeResponseReceived={(token, buyer) => {
          console.info({ token, buyer });
        }}
        createVerificationDetails={() => ({
          amount: "1.00",
          /* collected from the buyer */
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
        locationId="LHV7FXFYCGWX7"
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
};

export default Form;
