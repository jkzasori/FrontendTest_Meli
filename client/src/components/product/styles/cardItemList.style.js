import styled from "styled-components";
import colors from "../../../libs/const/colors";
export const CardItemContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
`;
export const ImgItem = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 4px;
  margin-right: 16px;
  object-fit: contain;
`;
export const GroupBasicData = styled.div`
  display: flex;
`;
export const ContainerGroupText = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 32px;
    font-weight: 100;
    color: ${colors.blackMeli}
  }
  h4 {
    font-size: 18px;
    font-weight: 100;
    margin: 0;
    color: ${colors.grayDarkMeli}
  }
`;

export const Condition = styled.div`
  width: 20%;
  padding-left: 15px;
  box-sizing: border-box;
  height: 180px;
    padding-top: 28px;
    color: ${colors.grayMeli}
`;
export const HR = styled.hr`
  width: 98%;
  height: 1px;
  background-color: ${colors.grayLight};
  border: none;
`;
