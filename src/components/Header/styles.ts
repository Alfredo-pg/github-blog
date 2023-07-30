import { styled } from "styled-components";
import backgroundImg from '../../assets/background.svg'

export const HeaderContainer = styled.header`
  background: url(${backgroundImg}) center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding: 4rem 0 8.38rem;
  }
`