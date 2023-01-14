import React, { useState } from "react";
import { Flex } from "rebass";

import SCREENS from "./config/screens";
import BasicInfo from "./screens/BasicInfo";

const JOBS = {};

const Form = () => {
  const [currentScreenState, setCurrentScreenState] = useState(SCREENS.BASIC);

  const renderCurrentScreen = () => {
    if (currentScreenState === SCREENS.BASIC) {
      return <BasicInfo />;
    }
  };

  return <div>{renderCurrentScreen()}</div>;
};

export default Form;
