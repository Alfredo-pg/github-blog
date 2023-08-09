import { styled } from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  a {
    color: ${(props) => props.theme.blue};
  }

  ul {
    padding-left: 1rem;
  }
`
