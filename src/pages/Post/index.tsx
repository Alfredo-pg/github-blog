import { useState, useCallback, useEffect } from 'react'
import { PostHeader } from './components/PostHeader'
import { api } from '../../lib/axios'
import { PostsI } from '../Home'
import { useParams } from 'react-router-dom'
import { PostContent } from './components/PostContent'

export function Post() {
  const [postContent, setPostContent] = useState<PostsI>({} as PostsI)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostIssues = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/alfredo-pg/github-blog/issues/${id}`,
      )

      setPostContent(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostIssues()
  }, [getPostIssues])

  return (
    <>
      <PostHeader isLoading={isLoading} postContent={postContent} />
      {!isLoading && <PostContent content={postContent.body} />}
    </>
  )
}
