import styled from "styled-components";

export const WrapperContainer = styled.div`
  background-color: red;
  .wrapperBody {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1080px;
    width: 1080px;
    padding: 10px 5px;}
    height: 100vh;
  @media (max-width: 1080px) {
    .wrapperBody {
      width: 95%;
    }
  }
`;
