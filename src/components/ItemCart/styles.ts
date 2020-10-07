import styled from 'styled-components';

export const ItemCartStyle = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;

  background-color: #ffffff;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);

  h1{
    margin: 0;
  }

  h1:last-child{
    margin-right: 10px;
  }

  img {
    width: 44px;
    margin: 3px 10px;
  }
`