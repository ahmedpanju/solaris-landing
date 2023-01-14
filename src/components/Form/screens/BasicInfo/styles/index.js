import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const Label = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  margin-bottom: 5px;
`;

export const Input = styled(TextField)`
  && {
    width: 300px;
  }
`;

export const BlackButton = styled.button`
  background-color: black;
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  padding: 0 20px;
`;
