import { styled } from "styled-components";

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  padding: 2rem;
  border-radius: 10px;
  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]};
    line-height: 130%;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: auto;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${props => props.theme["base-span"]};
      line-height: 0px;
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme["base-label"]};
    }
  }
`