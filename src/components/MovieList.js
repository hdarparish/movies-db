import React from "react";
import MovieCard from "./MovieCard";
//redux
import { useSelector } from "react-redux";

//animation
import { motion } from "framer-motion";
import { movieListAnimation } from "../Animation";

function MovieList() {
  //const [movieList, setMovieList] = useState([]);

  const movieList = useSelector((state) => state.movies.movieList);

  /*   useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.get("http://localhost:4000/");
        setMovieList(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []); */

  return (
    <section>
      <motion.div
        variants={movieListAnimation}
        initial="hidden"
        animate="show"
        className="movies"
      >
        {movieList &&
          movieList.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
      </motion.div>
    </section>
  );
}

export default MovieList;
