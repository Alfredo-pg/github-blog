import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../../components/Link";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function PostHeader() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <Link
          onClick={handleGoBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar" 
          href="#" 
          variant="arrowLeft"
        />
        <Link text="Ver no github" href="#" target="_blank" />
      </header>

      <h3>JavaScript data types and data structures</h3>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          Alfredo-pg
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}