import Categories from "../components/Categories";
import Header from "../components/Header";
import MovieList from "../components/MovieList";

function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <MovieList />
    </div>
  );
}

export default Home;
