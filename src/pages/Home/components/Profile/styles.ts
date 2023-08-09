import { styled } from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 13.25rem;

  padding: 2rem 2.5rem;
  gap: 2rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  margin-top: -5.5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
    }
  }

  ul {
    list-style: none;

    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-subtitle']};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
