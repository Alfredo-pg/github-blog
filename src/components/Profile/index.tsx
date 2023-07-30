import { ProfileContainer, ProfileContent } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../Link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";


export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/Alfredo-pg.png" alt="Foto de perfil" />

      <ProfileContent>
        <header>
          <h1>Alfredo Pamplona Gomes</h1>

          <Link text="Github" href="https://github.com/Alfredo-pg" />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas.
          Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc,
          volutpat pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Alfredo-pg
          </li>

          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
        </ul>
      </ProfileContent>
    </ProfileContainer>
  )
}