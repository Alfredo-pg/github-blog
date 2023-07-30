import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PostsConainer = styled(Link)`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
`