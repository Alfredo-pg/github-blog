import { SearchBarContainer, SearchBarHeader } from "./syles";

export function SearchBar() {
  return(
    <SearchBarContainer>
      <SearchBarHeader>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </SearchBarHeader>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}