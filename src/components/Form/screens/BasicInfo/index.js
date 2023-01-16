import React, { useState, useContext, useEffect } from "react";
import { Flex } from "rebass";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import firebase from "firebase/compat/app";
import { toast } from "react-toastify";

import * as Styled from "./styles";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  withStyles,
  FormLabel,
  CircularProgress,
} from "@mui/material";
import { AttendeesContext } from "../../../../context";

const BasicInfo = () => {
  const attendeesContext = useContext(AttendeesContext);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [showOtherInputState, setShowOtherInput] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    walletAddress: "",
    role: "",
    paid: false,
    otherRole: "",
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateResults = () => {
    if (!formState.name) {
      toast.error("Please enter your name");
    }
    if (!formState.email) {
      toast.error("Please enter your email");
    }
    if (!validateEmail(formState.email)) {
      toast.error("Please enter a valid email");
    }
    if (!formState.walletAddress) {
      toast.error("Please enter your eth wallet address");
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(formState.walletAddress)) {
      toast.error("Please enter a valid eth wallet address");
    }
    if (!formState.role) {
      toast.error("Please select a job title");
    }
    if (formState.role === "OTHER" && !formState.otherRole) {
      toast.error("Please specify your job title");
    }
    if (
      formState.name &&
      formState.email &&
      validateEmail(formState.email) &&
      formState.walletAddress &&
      /^0x[a-fA-F0-9]{40}$/.test(formState.walletAddress) &&
      formState.role
    ) {
      handleSubmitBasicInfo();
    }
  };

  const handleSubmitBasicInfo = async () => {
    try {
      attendeesContext.setClosedButtonDisabledState(true);
      const db = firebase.firestore();
      setIsLoadingState(true);
      const checkIfAlreadyExists = await db
        .collection("attendees")
        .where("email", "==", formState.email)
        .get();

      if (checkIfAlreadyExists.empty) {
        const newAttendeeResponse = await db
          .collection("attendees")
          .add(formState);

        attendeesContext.setCurrentAttendeeIdState(newAttendeeResponse.id);

        if (!!formState.otherRole) {
          attendeesContext.setCurrentScreenState(
            attendeesContext.SCREENS.MORE_INFO
          );
        } else {
          attendeesContext.setCurrentScreenState(
            attendeesContext.SCREENS.THANK_YOU
          );
        }
      } else {
        toast.error("This email has already been registered");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    } finally {
      attendeesContext.setClosedButtonDisabledState(false);
      setIsLoadingState(false);
    }
  };

  useEffect(() => {
    setShowOtherInput(formState.role === "OTHER");
  }, [formState.role]);

  return (
    <div>
      <Flex mb="30px" flexDirection="column">
        <Styled.Input
          required
          type="text"
          label="Name"
          value={formState.name}
          onChange={(event) =>
            setFormState({ ...formState, name: event.target.value })
          }
        />
      </Flex>
      <Flex mb="30px" flexDirection="column">
        <Styled.Input
          required
          label="Email"
          value={formState.email}
          onChange={(event) =>
            setFormState({ ...formState, email: event.target.value })
          }
        />
      </Flex>
      <Flex mb="30px" flexDirection="column">
        <Styled.Input
          required
          label="Ethereum Wallet Address"
          value={formState.walletAddress}
          onChange={(event) =>
            setFormState({ ...formState, walletAddress: event.target.value })
          }
        />
      </Flex>
      <Flex flexDirection="column" mb="30px">
        <FormLabel>Job Title</FormLabel>
        <RadioGroup
          required
          name="role"
          value={formState.role}
          onChange={(event) =>
            setFormState({
              ...formState,
              role: event.target.value,
            })
          }
        >
          <FormControlLabel
            value="FOUNDER"
            control={<Radio />}
            label="Web3/Tech Founder"
          />
          <FormControlLabel
            value="DEVELOPER"
            control={<Radio />}
            label="Developer/Programmer"
          />
          <FormControlLabel
            value="MARKETER"
            control={<Radio />}
            label="Tech Marketer"
          />
          <FormControlLabel value="VC" control={<Radio />} label="VC/Angel" />
          <FormControlLabel value="OTHER" control={<Radio />} label="Other" />
        </RadioGroup>
      </Flex>
      {showOtherInputState && (
        <Flex mb="30px">
          <Styled.Input
            required
            label="Please Specify"
            value={formState.otherRole}
            onChange={(event) =>
              setFormState({ ...formState, otherRole: event.target.value })
            }
          />
        </Flex>
      )}
      <Flex justifyContent="center">
        {isLoadingState ? (
          <CircularProgress />
        ) : (
          <Styled.BlackButton
            onClick={() => !isLoadingState && validateResults()}
          >
            Continue To Payment
          </Styled.BlackButton>
        )}
      </Flex>
    </div>
  );
};

export default BasicInfo;
