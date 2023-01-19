import styled, { css } from "styled-components";
import { Flex } from "rebass";
import AdbIcon from "@mui/icons-material/Adb";
import Background from "./background.png";
import BackgroundMobile from "./background-mobile.png";
import InstagramIconMui from "@mui/icons-material/Instagram";
import TwitterIconMui from "@mui/icons-material/Twitter";
import MailIconMui from "@mui/icons-material/Mail";

export const BackgroundWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(
      135deg,
      rgba(163, 163, 163, 0.2) 25%,
      transparent 25%
    ),
    linear-gradient(225deg, rgba(163, 163, 163, 0.01) 25%, transparent 25%),
    linear-gradient(45deg, rgba(163, 163, 163, 0.01) 25%, transparent 25%),
    linear-gradient(
      315deg,
      rgba(163, 163, 163, 0.01) 25%,
      rgba(163, 163, 163, 0.01) 25%
    );
  background-position: 10px 0, 10px 0, 0 0, 0 0;
  background-size: 10px 10px;
  background-repeat: repeat;
  positon: relative;
  background-color: black;
`;

export const Container = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: url(${BackgroundMobile});
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const NavigationContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
`;

export const TwitterIcon = styled(TwitterIconMui)`
  && {
    color: white;
    cursor: pointer;
    font-size: 30px;
    margin-right: 20px;
  }
`;

export const InstagramIcon = styled(InstagramIconMui)`
  && {
    color: white;
    cursor: pointer;
    font-size: 30px;
    margin-right: 20px;
  }
`;

export const MailIcon = styled(MailIconMui)`
  && {
    color: white;
    cursor: pointer;
    font-size: 30px;
  }
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
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleText = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 400;
  letter-spacing: 4px;
  color: ${({ color = "white" }) => color};
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 80px;
  text-align: center;
  background-size: 100%;
  background-repeat: repeat;
  max-width: 800px;
  line-height: 90px;

  background-image: linear-gradient(45deg, #ccccff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 70px;
  }
`;

export const MainTitleText = styled(TitleText)`
  line-height: 20px;
  font-size: 15px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
  max-width: 100%;
  margin-top: 100px;
  font-family: sk-regular;
`;

export const SmallText = styled.h4`
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 30px;
  font-family: sk-curious;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
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
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;

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
  // background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 20px;
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
