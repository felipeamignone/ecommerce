import styled from "styled-components";

export const FooterText = styled.p.attrs({
  children: "Desenvolvido por Felipe Alves Mignone e Kedley Tofoli Mendonça",
})`
    font-size: 12px;
`;

export const Container = styled.div.attrs({})`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 16px;
`;
