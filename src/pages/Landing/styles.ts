import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #ededed;

  .products {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .add {
    padding: 30px;
    display: flex;
    justify-content: center;
    transition: 1.2s ease all;
    button:hover {
      transition: 1.2s ease all;
      background-color: grey;
    }
  }
`;
