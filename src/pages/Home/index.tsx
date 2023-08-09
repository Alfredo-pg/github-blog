import { useCallback, useEffect, useState } from 'react'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { PostsConainer } from './styles'
import { api } from '../../lib/axios'

export interface PostsI {
  title: string
  comments: number
  body: string
  created_at: string
  number: number
  html_url: string
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<PostsI[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadGetPots = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/search/issues?q=${query}%20repo:${'alfredo-pg'}/${'github-blog'}`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadGetPots()
  }, [loadGetPots])

  return (
    <>
      <Profile />
      <SearchBar loadGetPots={loadGetPots} postsLength={posts.length} />

      {isLoading ? (
        <></>
      ) : (
        <PostsConainer>
          {posts.map((post) => (
            <PostCard key={post.number} post={post} />
          ))}
        </PostsConainer>
      )}
    </>
  )
}
