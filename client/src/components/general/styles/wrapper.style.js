import styled from "styled-components";
import colors from "../../../libs/const/colors";
export const WrapperContainer = styled.div`
  background-color: ${colors.grayLight};
  height: 100%;
  .wrapperBody {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1080px;
    padding: 10px 5px;
  }
  @media (max-width: 1080px) {
    .wrapperBody {
      width: 95%;
    }
  }
`;
