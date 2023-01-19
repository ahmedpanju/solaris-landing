import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Flex } from "rebass";

export const GridTitle = styled.p`
  font-size: 22px;
  margin: 0;
  padding: 0;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: sk-bold;
  letter-spacing: 2px;
`;

export const GridDescriptonText = styled.p`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: white;
  font-family: sk-curious;
  text-decoration: ${({ decoration = "none" }) => decoration};
  cursor: ${({ onClick }) => (!!onClick ? "pointer" : "default")};
`;

export const SignUpButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 10px;
  height: 74px;
  width: 215px;
  color: black;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  font-family: sk-bold;
`;

export const SignUpButtonArrow = styled(ArrowForwardIcon)`
  && {
    margin-left: 10px;
  }
`;

export const PeopleIcon = styled(Diversity3Icon)`
  && {
    font-size: 50px;
    color: white;
    margin-bottom: 20px;
  }
`;

export const DateIcon = styled(CalendarMonthIcon)`
  && {
    font-size: 50px;
    color: white;
    margin-bottom: 20px;
  }
`;

export const LocationIcon = styled(LocationOnIcon)`
  && {
    font-size: 50px;
    color: white;
    margin-bottom: 20px;
  }
`;

export const CommunityContainer = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WhoContainer = styled(Flex)`
  padding-right: 70px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const LocationContainer = styled.div`
  padding-left: 70px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileOnlyLocation = styled.div`
  display: none;

  @media (max-width: 768px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    display: inherit;
  }
`;
