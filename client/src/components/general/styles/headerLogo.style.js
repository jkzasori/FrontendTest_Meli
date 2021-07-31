import styled from "styled-components";
import colors from "../../../libs/const/colors";

export const HeaderLogoContainer = styled.div`
  background-color: ${colors.yellowMeli};
  div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1080px;
    width: 1080px;
    padding: 10px 5px;
  }
  input {
    width: 100%;
  }
  @media (max-width: 1080px) {
    div {
      width: 95%;
    }
  }
`;
