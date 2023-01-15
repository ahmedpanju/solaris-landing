import React, { useState, useContext } from "react";
import { Flex } from "rebass";

import BasicInfo from "./screens/BasicInfo";
import { AttendeesContext } from "../../context";

const JOBS = {};

const Form = () => {
  const attendeesContext = useContext(AttendeesContext);

  const renderCurrentScreen = () => {
    if (
      attendeesContext.currentScreenState === attendeesContext.SCREENS.BASIC
    ) {
      return <BasicInfo />;
    }
  };

  return <div>{renderCurrentScreen()}</div>;
};

export default Form;
