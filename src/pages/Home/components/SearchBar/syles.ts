import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  margin-top: 4.5rem;
  flex-direction: column;
  gap: 0.5rem;

  input {
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-text"]};
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${props => props.theme["base-label"]};
    }
  }
`

export const SearchBarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]};
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme["base-span"]};
    font-weight: 400;
  }
`