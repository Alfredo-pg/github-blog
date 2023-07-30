import { styled } from "styled-components";

export const PostCardContainer = styled.div`
  width: 100%;
  height: 16.25rem;

  background: ${props => props.theme["base-post"]};
  border: 2px solid transparent;
  padding: 2rem;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    border: 2px solid ${props => props.theme["base-label"]};
  }
  
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    gap: 1rem;

    h2 {
      flex: 1;
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]};
      line-height: 160%;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  p { 
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`