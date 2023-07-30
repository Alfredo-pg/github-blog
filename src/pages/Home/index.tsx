import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { PostsConainer } from "./styles";

export function Home() {
  return (
    <>
      <Profile />
      <SearchBar />

      <PostsConainer to="/post/1" >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsConainer>
    </>
  )
}