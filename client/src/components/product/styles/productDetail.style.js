import styled from "styled-components";
import colors from "../../../libs/const/colors";
export const ContainerProductDetail = styled.div`
  padding: 32px;
  box-sizing: border-box;
  display: flex;
`;
export const Description = styled.div`
  width: 680px;
  .imgContainer {
    text-align: center;
  }
  .textDescription {
    h2 {
      font-size: 28px;
      font-weight: 100;
      color: ${colors.blackMeli};
      margin-bottom: 32px;
    }
    p {
      font-size: 16px;
      color: ${colors.grayMeli};
    }
  }
`;

export const PaymentZone = styled.div`
  /* background-color: red; */
  box-sizing: border-box;
  max-width: 352px;
  h2,
  h4,
  h6 {
    margin-top: 0;
  }
  h2 {
    font-size: 46px;
    font-weight: 100;
  }
  h4,
  h2 {
    color: ${colors.blackMeli};
  }
  h4 {
    font-size: 24px;
    margin-bottom: 32px;
  }
  h6 {
    font-size: 14px;
    margin-bottom: 16px;
  }
  button {
    background-color: ${colors.blueMeli};
    font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,
      Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 48px;
    padding: 0 24px;
    height: 48px;
    text-align: center;
    border-radius: 6px;
    display: inline-block;
    width: 100%;
    border: none;
    color: white;
    cursor: pointer;
    :hover {
      background-color: ${colors.darkBlueMeli};
    }
  }
`;
