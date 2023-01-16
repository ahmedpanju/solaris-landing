import React from "react";
import { Flex } from "rebass";

import * as Styled from "./styles";

const MoreInfo = ({ onClose }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Styled.Title>Thanks For Your Interest</Styled.Title>
      <Styled.Description>
        We'll review your application and get back to you.
      </Styled.Description>
      <Styled.BlackButton onClick={onClose}>Close</Styled.BlackButton>
    </Flex>
  );
};

export default MoreInfo;
