import styled, { css } from "styled-components";
import AdbIcon from "@mui/icons-material/Adb";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to right, #171717, #3d3d3d);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1000px;
  padding: 75px 0;
`;

export const Jumbotron = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({ color = "white" }) => color};
`;

export const SmallText = styled.h4`
  margin: 0;
  padding: 0;
  color: white;
`;

export const BlackButton = styled.button`
  background-color: black;
  border-radius: 30px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  border: none;
  outline: none;
  margin-top: 25px;
  color: white;
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

export const InfoPanel = styled.div`
  background-color: #242424;
  width: 100%;
  padding: 75px 0;
  display: flex;
  justify-content: center;
`;

export const SinglePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;

  &:first-of-type {
    margin-right: 50px;
  }

  &:last-of-type {
    margin-left: 50px;
  }
`;

const iconStyles = css`
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
`;

export const FirstPanelIcon = styled(AdbIcon)`
  && {
    ${iconStyles}
  }
`;

export const PanelTitle = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PanelDescription = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
`;

export const FooterPanel = styled.div`
  width: 100%;
  display: flex;
  flex: 2;
`;

export const SingleFooterPanel = styled.div`
  display: flex;
  flex: 1;
  padding: 75px;
  flex-direction: column;

  &:first-of-type {
    background-color: white;
  }

  &:last-of-type {
    background-color: #242424;
  }
`;

export const FooterInfoText = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  line-height: 30px;
`;
