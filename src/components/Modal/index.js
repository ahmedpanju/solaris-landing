import React, { useState, useContext } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import BasicInfo from "../Form/screens/BasicInfo";
import Payment from "../Form/screens/Payment";
import { AttendeesContext } from "../../context";
import MoreInfo from "../Form/screens/MoreInfo";
import ThankYou from "../Form/screens/ThankYou";
import { Flex } from "rebass";

import * as Styled from "./styles";

const Modal = ({ open, onClose }) => {
  const attendeesContext = useContext(AttendeesContext);

  const handleClose = () => {
    onClose();
    attendeesContext.setCurrentScreenState(attendeesContext.SCREENS.BASIC);
  };

  const renderCurrentScreen = () => {
    if (
      attendeesContext.currentScreenState === attendeesContext.SCREENS.BASIC
    ) {
      return <BasicInfo />;
    }
    if (
      attendeesContext.currentScreenState === attendeesContext.SCREENS.PAYMENT
    ) {
      return <Payment />;
    }
    if (
      attendeesContext.currentScreenState === attendeesContext.SCREENS.MORE_INFO
    ) {
      return <MoreInfo onClose={handleClose} />;
    }
    if (
      attendeesContext.currentScreenState === attendeesContext.SCREENS.THANK_YOU
    ) {
      return <ThankYou onClose={handleClose} />;
    }
  };

  return (
    <Dialog open={open}>
      <div style={{ padding: "30px" }}>
        <Flex mb="20px" justifyContent="space-between" alignItems="center">
          <Styled.Title>Secure Your Spot</Styled.Title>
          <Styled.CloseButton
            onClick={() =>
              !attendeesContext.closeButtonDisabledState && handleClose()
            }
          />
        </Flex>
        <div>{renderCurrentScreen()}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
