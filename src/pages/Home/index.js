import React from "react";
import { Flex } from "rebass";

import Form from "../../components/Form";

import * as Styled from "./styles";

const Home = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.TitleText>SOLARIS</Styled.TitleText>
        <Styled.Jumbotron>
          <Flex flexDirection="column">
            <Flex mb="25px">
              <Styled.SmallText>Solaris</Styled.SmallText>
            </Flex>
            <Styled.TitleText>
              Lorem ipsum dolor sit
              <br />
              amet, consectetur.
            </Styled.TitleText>
            <Styled.BlackButton>Twitter</Styled.BlackButton>
          </Flex>
          <Flex>
            <Styled.ImageContainer>
              <Styled.Image
                src="https://picsum.photos/400/400"
                alt="NFT Image"
              />
            </Styled.ImageContainer>
          </Flex>
        </Styled.Jumbotron>
        <Form />
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Home;
