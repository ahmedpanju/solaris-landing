import React, { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import SCREENS from "./screens";
import BasicInfo from "../Form/screens/BasicInfo";
import Payment from "../Form/screens/Payment";

const Modal = () => {
  const [currentScreenState, setCurrentScreenState] = useState(SCREENS.BASIC);

  const renderCurrentScreen = () => {
    if (currentScreenState === SCREENS.BASIC) {
      return (
        <BasicInfo
          currentScreenState={currentScreenState}
          setCurrentScreenState={setCurrentScreenState}
        />
      );
    }
    if (currentScreenState === SCREENS.PAYMENT) {
      return (
        <Payment
          currentScreenState={currentScreenState}
          setCurrentScreenState={setCurrentScreenState}
        />
      );
    }
  };

  return (
    <Dialog open>
      <DialogTitle>Secure Your Spot</DialogTitle>
      <div style={{ padding: "30px" }}>
        <div>{renderCurrentScreen()}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
