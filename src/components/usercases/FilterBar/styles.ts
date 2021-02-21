import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  justify-content: flex-start;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 30px;

  input[type='radio']:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -3px;
    left: -1px;
    position: relative;
    content: '';
    display: inline-block;
    visibility: visible;
    background-color: #ffffff;
    border: 1px solid black;
  }

  input[type='radio']:checked:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -3px;
    left: -1px;
    position: relative;
    background-color: blueviolet;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid blueviolet;
  }
`;

export const RadioItem = styled.input.attrs({
  type: 'radio',
  name: 'domicilio',
})`
    cursor: pointer;
`;

export const RadioDescribleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  padding-left: 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #322864;
  cursor: pointer;
`;
