import React, { useState, useEffect } from "react";
import { Flex } from "rebass";
import ReactGa from "react-ga4";

import Modal from "../../components/Modal";

import * as Styled from "./styles";
import Countdown from "../../components/Countdown";
import WeHostEvents from "../../components/WeHostEvents";

const Home = () => {
  const [formOpenState, setFormOpenState] = useState(false);

  useEffect(() => {
    ReactGa.pageview("/");
  }, []);

  return (
    <Styled.BackgroundWrapper>
      <Styled.Container>
        <Styled.WrapperMain>
          <Styled.NavigationContainer>
            <Styled.TwitterIcon
              onClick={() =>
                window.open("https://twitter.com/Solarisagency_", "_blank")
              }
            />
            <Styled.MailIcon
              onClick={() =>
                window.open("mailto:info@solarisagency.io", "_blank")
              }
            />
          </Styled.NavigationContainer>
          <Styled.Wrapper>
            <Styled.MainTitleText>WELCOME TO SOLARIS</Styled.MainTitleText>
            <Styled.Jumbotron>
              <Flex mb="40px">
                <Styled.TitleText>
                  We Connect the Brightest Minds in Web3 & A.I
                </Styled.TitleText>
              </Flex>
              <Styled.SmallText>
                We are a full-stack tech development and marketing agency for
                Web3 & A.I companies. We also host Web3 events & build
                communities in Bali.
              </Styled.SmallText>
              {/* <Countdown /> */}
              <WeHostEvents />
            </Styled.Jumbotron>
          </Styled.Wrapper>

          <Modal open={formOpenState} onClose={() => setFormOpenState(false)} />
        </Styled.WrapperMain>
      </Styled.Container>
    </Styled.BackgroundWrapper>
  );
};

export default Home;
