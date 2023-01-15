import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export const CloseButton = styled(CloseIcon)`
  && {
    cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  }
`;
