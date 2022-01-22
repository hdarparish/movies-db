import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
//router
import { useLocation } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadMovies, loadQuery } from "../actions/moviesAction";
import { loadCategory } from "../actions/categoryAction";
//animation
import { motion, AnimatePresence } from "framer-motion";
import { movieListAnimation } from "../Animation";
//add UUID to generate unique keys otherwise react will not re-render components that might exist in multiple categories
import { v4 as uuidv4 } from "uuid";
//infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

function MovieList() {
  const location = useLocation();

  const { category, movieCount } = useSelector((state) => state.category);

  const { movieList, searched } = useSelector((state) => state.movies);
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [count, setCount] = useState(movieCount);

  const dispatch = useDispatch();

  const loadMoviesHandler = (count = 0) => {
    dispatch(loadMovies(category, count));
  };

  useEffect(() => {
    if (searched) {
      /*       console.log(searched);
      setMovies([]);
      setCount(0);
      const newList = movieList.map((item) => ({
        ...item,
        uniqueID: uuidv4(),
      })); */
      setSearchedMovies((searchedMovies) => [...searchedMovies, ...searched]);
    }
  }, [searched]);

  useEffect(() => {
    console.log(searched);
    setMovies([]);
    setCount(0);
    if (!location.pathname.includes("/search")) {
      loadMoviesHandler();
    }
  }, [category]);

  useEffect(() => {
    /*     console.log(movieList); */
    if (movieList) {
      const newList = movieList.map((item) => ({
        ...item,
        uniqueID: uuidv4(),
      }));

      setMovies((movies) => [...movies, ...newList]);
    }
  }, [movieList]);

  const loadNext = () => {
    console.log(count);
    setCount(count + 20);
    if (location.pathname === "/") {
      loadMoviesHandler(count + 20);
    } else if (location.pathname.includes("/search")) {
      const searchQuery = new URLSearchParams(location.search).get("q");
      dispatch(loadQuery(searchQuery, count + 20));
    }
  };

  return (
    <section>
      <InfiniteScroll
        dataLength={searched.length > 0 ? searchedMovies.length : movies.length}
        next={loadNext}
        hasMore={true}
        loader={<h4 className="movies-loading">Loading...</h4>}
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
            {searchedMovies.length
              ? searchedMovies.map((movie, index) => (
                  <MovieCard movie={movie} key={movie._id} />
                ))
              : movies.map((movie, index) => (
                  <MovieCard movie={movie} key={movie.uniqueID} />
                ))}
          </AnimatePresence>
        </motion.div>
      </InfiniteScroll>
    </section>
  );
}

export default MovieList;
