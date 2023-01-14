import React, { useState } from "react";
import { Flex } from "rebass";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

import * as Styled from "./styles";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  withStyles,
  FormLabel,
} from "@mui/material";
import SCREENS from "../../config/screens";

const BasicInfo = ({ currentScreenState, setCurrentScreenState }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    walletAddress: "",
    jobType: "",
  });

  return (
    <div>
      <Flex mb="30px" flexDirection="column">
        <Styled.Input
          label="Name"
          value={formState.name}
          onChange={(event) =>
            setFormState({ ...formState, name: event.target.value })
          }
        />
      </Flex>
      <Flex mb="30px" flexDirection="column">
        <Styled.Input
          label="Email"
          value={formState.email}
          onChange={(event) =>
            setFormState({ ...formState, email: event.target.value })
          }
        />
      </Flex>
      <Flex mb="30px" flexDirection="column">
        <Styled.Input
          label="Wallet Address"
          value={formState.walletAddress}
          onChange={(event) =>
            setFormState({ ...formState, walletAddress: event.target.value })
          }
        />
      </Flex>
      <Flex flexDirection="column" mb="30px">
        <FormLabel>I am a...</FormLabel>
        <RadioGroup name="jobType">
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Web3/Tech Founder"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Developer/Programmer"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Tech Marketer"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="VC/Angel"
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </Flex>
      <Flex justifyContent="center">
        <Styled.BlackButton
          onClick={() => setCurrentScreenState(SCREENS.PAYMENT)}
        >
          Continue To Payment
        </Styled.BlackButton>
      </Flex>
    </div>
  );
};

export default BasicInfo;
