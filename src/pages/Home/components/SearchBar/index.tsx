import { useForm } from 'react-hook-form'
import { SearchBarContainer, SearchBarHeader } from './syles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchBarProps {
  loadGetPots: (query?: string) => Promise<void>
  postsLength: number
}

export function SearchBar({ loadGetPots, postsLength }: SearchBarProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await loadGetPots(data.query)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchBarHeader>
        <h2>Publicações</h2>
        <span>{postsLength} publicações</span>
      </SearchBarHeader>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchBarContainer>
  )
}
