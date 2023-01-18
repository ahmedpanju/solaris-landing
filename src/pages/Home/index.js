import React, { useState, useEffect } from "react";
import { Flex } from "rebass";
import ReactGa from "react-ga4";

import Modal from "../../components/Modal";

import * as Styled from "./styles";
import Countdown from "../../components/Countdown";

const Home = () => {
  const [formOpenState, setFormOpenState] = useState(false);

  useEffect(() => {
    ReactGa.pageview("/");
  }, []);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.MainTitleText>SOLARIS</Styled.MainTitleText>
        <Styled.Jumbotron>
          <Flex mb="50px">
            <Styled.TitleText>
              We Connect the Brightest Minds in Web3 & A.I
            </Styled.TitleText>
          </Flex>
          <Styled.SmallText>
            We host paint parties in Canggu
            <br />
            and turn them into NFTs for you to keep
          </Styled.SmallText>
          <Countdown />
          <Styled.ButtonContainer>
            <Styled.BlackButton
              onClick={() => {
                setFormOpenState(!formOpenState);
              }}
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
        </Styled.Jumbotron>
      </Styled.Wrapper>

      <Modal open={formOpenState} onClose={() => setFormOpenState(false)} />
    </Styled.Container>
  );
};

export default Home;
