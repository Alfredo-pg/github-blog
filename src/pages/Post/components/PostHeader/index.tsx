import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../../components/Link";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { PostsI } from "../../../Home";
import { dateFormatter } from "../../../../utils/formatter";

interface PostHeaderProps {
  postContent: PostsI
  isLoading: boolean
}

export function PostHeader({ postContent, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      {isLoading ? <></> : (
        <>
          <header>
            <Link
              onClick={handleGoBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              href="#"
              variant="arrowLeft"
            />
            <Link text="Ver no github" href={postContent.html_url} target="_blank" />
          </header>

          <h3>{postContent.title}</h3>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postContent.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {dateFormatter(postContent.created_at)}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postContent.comments} comentários
            </li>
          </ul>
        </>
      )}

    </PostHeaderContainer>
  )
}
