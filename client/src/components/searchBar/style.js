import styled from "styled-components";

import colors from "../../libs/const/colors";
export const ContainerInput = styled.div `
  width: 100%;
  height: 39px;
  button {
    width: 46px;
    height: 39px;
    border: none;
    background-color: ${colors.grayLightMeli};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  input {
    height: 100%;
    box-sizing: border-box;
    font-size: 18px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px 15px;
    :focus {
    outline: 0 none;
  }
  }
  ::after {
    width: 21px;
    height: 21px;
    right: 0;
    background-color: blue;
  }
`