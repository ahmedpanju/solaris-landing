import React from "react";
import { Flex } from "rebass";

import * as Styled from "./styles";

const ThankYou = ({ onClose }) => {
  return (
    <Flex flexDirection="column">
      <Styled.Title>Thank You</Styled.Title>
      <Styled.Description>
        Thanks for your interest! We will be in contact with you shortly for
        more details.
      </Styled.Description>
      <Styled.BlackButton onClick={onClose}>Close</Styled.BlackButton>
    </Flex>
  );
};

export default ThankYou;
