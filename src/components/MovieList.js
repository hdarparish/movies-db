import React from "react";
import MovieCard from "./MovieCard";
//redux
import { useSelector } from "react-redux";
//animation
import { motion, AnimatePresence } from "framer-motion";
import { movieListAnimation } from "../Animation";
//add UUID to generate unique keys otherwise react will not re-render components that might exist in multiple categories
import { v4 as uuidv4 } from "uuid";

function MovieList() {
  const movieList = useSelector((state) => state.movies.movieList);

  return (
    <section>
      <motion.div
        variants={movieListAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="movies"
      >
        <AnimatePresence>
          {movieList &&
            movieList.map((movie) => (
              <MovieCard key={uuidv4()} movie={movie} />
            ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default MovieList;
