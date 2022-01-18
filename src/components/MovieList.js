import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
//router
import { useLocation } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadGenre } from "../actions/moviesAction";
//animation
import { motion, AnimatePresence } from "framer-motion";
import { movieListAnimation } from "../Animation";
//add UUID to generate unique keys otherwise react will not re-render components that might exist in multiple categories
import { v4 as uuidv4 } from "uuid";
//infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

function MovieList() {
  const location = useLocation();

  const category = useSelector((state) => state.movies.category);
  const movieList = useSelector((state) => state.movies.movieList);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const loadMoviesHandler = (count = 0) => {
    dispatch(loadGenre(category, count));
  };

  useEffect(() => {
    setMovies([]);
    if (!location.pathname.includes("/search")) {
      loadMoviesHandler();
    }
  }, [category, location]);

  useEffect(() => {
    /*     console.log(movieList); */
    if (movieList) {
      const newList = movieList.map((item) => ({
        ...item,
        uniqueID: uuidv4(),
      }));
      if (movies.length > 0) {
        setMovies((movies) => [...movies, ...newList]);
      } else {
        setMovies(newList);
      }
    }
  }, [movieList]);

  const loadNext = () => {
    if (!location.pathname.includes("/search")) {
      setCount(count + 20);
      loadMoviesHandler(count + 20);
    }
  };

  return (
    <section>
      <InfiniteScroll
        dataLength={movies?.length}
        next={loadNext}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        style={{ overflow: "hidden" }}
      >
        <motion.div
          variants={movieListAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className="movies"
        >
          <AnimatePresence>
            {movies.length > 0 &&
              movies.map((movie, index) => (
                <MovieCard movie={movie} key={movie.uniqueID} />
              ))}
          </AnimatePresence>
        </motion.div>
      </InfiniteScroll>
    </section>
  );
}

export default MovieList;
