import { styled } from "styled-components";

export const LinkContainer = styled.a`
  border: none;
  background: none;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  color: ${props => props.theme.blue};
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  line-height: 160%;
  text-transform: uppercase;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-bottom: 1px solid ${props => props.theme.blue};
  }
`