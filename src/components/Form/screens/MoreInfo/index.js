import React from "react";
import { Flex } from "rebass";

import * as Styled from "./styles";

const MoreInfo = ({ onClose }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Styled.Title>Thanks For Your Interest</Styled.Title>
      <Styled.Description>
        Etiam sagittis sem sed arcu ornare placerat. Morbi semper orci quis
        gravida venenatis. Cras semper eu odio porttitor lacinia. Etiam sagittis
        sem sed arcu ornare placerat. Morbi semper orci quis gravida venenatis.
        Cras semper eu odio porttitor lacinia. Etiam sagittis sem sed arcu
        ornare placerat. Morbi semper orci quis gravida venenatis. Cras semper
        eu odio porttitor lacinia.
      </Styled.Description>
      <Styled.BlackButton onClick={onClose}>Close</Styled.BlackButton>
    </Flex>
  );
};

export default MoreInfo;
