import { ProfileContainer, ProfileContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../../../components/Link'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface ProfileDataI {
  avatar_url: string
  bio: string
  company?: string
  followers: number
  login: string
  name: string
  html_url: string
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataI>(
    {} as ProfileDataI,
  )

  const getProfileData = useCallback(async () => {
    const response = await api.get('/users/alfredo-pg')

    setProfileData(response.data)
  }, [])

  useEffect(() => {
    getProfileData()
  }, [getProfileData])

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="Foto de perfil" />

      <ProfileContent>
        <header>
          <h1>{profileData.name}</h1>

          <Link text="Github" href={profileData.html_url} target="_blank" />
        </header>

        <p>{profileData.bio}</p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {profileData.login}
          </li>

          {profileData.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {profileData.company}
            </li>
          )}

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {profileData.followers} seguidores
          </li>
        </ul>
      </ProfileContent>
    </ProfileContainer>
  )
}
