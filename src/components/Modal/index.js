import React, { useState, useContext } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import BasicInfo from "../Form/screens/BasicInfo";
import Payment from "../Form/screens/Payment";
import { AttendeesContext } from "../../context";
import MoreInfo from "../Form/screens/MoreInfo";

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
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
        attendeesContext.setCurrentScreenState(attendeesContext.SCREENS.BASIC);
      }}
    >
      <DialogTitle>Secure Your Spot</DialogTitle>
      <div style={{ padding: "30px" }}>
        <div>{renderCurrentScreen()}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
