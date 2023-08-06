import { PostsI } from "../.."
import { dateFormatter } from "../../../../utils/formatter"
import { PostCardContainer } from "./styles"

interface PostProps {
  post: PostsI
}

export function PostCard({ post }: PostProps) {
  return (
    <PostCardContainer>
      <header>
        <h2>{post.title}</h2>

        <span>{dateFormatter(post.created_at)}</span>
      </header>

        <p>
          {post.body}
        </p>
    </PostCardContainer>
  )
}
