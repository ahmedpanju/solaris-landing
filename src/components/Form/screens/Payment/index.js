import React from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

import * as Styled from "./styles";

const Payment = () => {
  return (
    <div>
      <Styled.Label>Rp50,000</Styled.Label>
      <PaymentForm
        applicationId="sandbox-sq0idb-NyYouwfgznIQYotX5bN3GA"
        cardTokenizeResponseReceived={(token, buyer) => {
          console.info({ token, buyer });
        }}
        createVerificationDetails={() => ({
          amount: "1.00",
          billingContact: {
            addressLines: ["123 Main Street", "Apartment 1"],
            familyName: "Doe",
            givenName: "John",
            countryCode: "GB",
            city: "London",
          },
          currencyCode: "GBP",
          intent: "CHARGE",
        })}
        locationId="LHV7FXFYCGWX7"
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
};

export default Payment;
