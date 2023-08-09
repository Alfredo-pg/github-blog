import { css, styled } from 'styled-components'

interface LinkProps {
  variant?: 'arrowLeft'
}

export const LinkContainer = styled.a<LinkProps>`
  border: none;
  background: none;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;
  line-height: 160%;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  ${(props) =>
    props.variant === 'arrowLeft' &&
    css`
      flex-direction: row-reverse;
      line-height: 0px;
    `}
`
