import React, { useState } from "react";
import { Flex } from "rebass";

import Modal from "../../components/Modal";

import * as Styled from "./styles";

const Home = () => {
  const [formOpenState, setFormOpenState] = useState(false);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.MainTitleText>SOLARIS</Styled.MainTitleText>
        <Styled.Jumbotron>
          <Styled.ContainerForText flexDirection="column">
            <Flex mb="50px">
              <Styled.TitleText>
                Join the Web3 Revolution - Exclusive Crypto Networking Events
                for <b>Tech Companies</b>, <b>Developers</b> & <b>Marketers</b>.
              </Styled.TitleText>
            </Flex>
            <Styled.SmallText>
              We are the premier destination for Web3 enthusiasts, connecting
              tech companies, developers and marketers through exclusive Web3
              networking events.
              <br />
              <br />
              Fill out the form below to be considered for our first event:
            </Styled.SmallText>
            <Styled.ButtonContainer>
              <Styled.BlackButton
                onClick={() => setFormOpenState(!formOpenState)}
              >
                ENROLL NOW
              </Styled.BlackButton>
              <Styled.BlackButton
                onClick={() =>
                  window.open("https://twitter.com/Solarisevents_", "_blank")
                }
              >
                <Styled.TwitterIcon />
              </Styled.BlackButton>
            </Styled.ButtonContainer>
          </Styled.ContainerForText>
        </Styled.Jumbotron>
      </Styled.Wrapper>

      <Modal open={formOpenState} onClose={() => setFormOpenState(false)} />
    </Styled.Container>
  );
};

export default Home;
