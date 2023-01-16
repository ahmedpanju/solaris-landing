import styled, { css } from "styled-components";
import { Flex } from "rebass";
import AdbIcon from "@mui/icons-material/Adb";
import Background from "./background2.png";
import TwitterIconMui from "@mui/icons-material/Twitter";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1000px;
  padding: 75px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Jumbotron = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleText = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 4px;
  color: ${({ color = "white" }) => color};
`;

export const MainTitleText = styled(TitleText)`
  font-size: 100px;
  margin-bottom: 25px;
  letter-spacing: 6px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 50px;
    padding-left: 20px;
  }
`;

export const SmallText = styled.h4`
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 20px;
`;

export const BlackButton = styled.button`
  background-color: black;
  border-radius: 30px;
  padding: 0 20px;
  height: 75px;
  cursor: pointer;
  border: 2px solid white;
  outline: none;
  margin-top: 30px;
  color: white;
  font-weight: bold;
  font-size: 30px;

  &:first-of-type {
    margin-right: 20px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const ContainerForText = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TwitterIcon = styled(TwitterIconMui)`
  && {
    color: white;
  }
`;

export const ButtonContainer = styled(Flex)`
  && {
    margin-top: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
