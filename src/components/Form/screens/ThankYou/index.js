import React from "react";
import { Flex } from "rebass";

import * as Styled from "./styles";

const ThankYou = ({ onClose }) => {
  return (
    <Flex flexDirection="column">
      <Styled.Title>Thank You</Styled.Title>
      <Styled.Description>
        Thanks for your interest. Our next event will take place in{" "}
        <b>Canggu</b> on <b>January 29th 2023</b>. We will be in contact with
        you shortly for details on location and time.
      </Styled.Description>
      <Styled.BlackButton onClick={onClose}>Close</Styled.BlackButton>
    </Flex>
  );
};

export default ThankYou;
