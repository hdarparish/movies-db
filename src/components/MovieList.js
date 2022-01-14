import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
//animation
import { motion } from "framer-motion";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.get("http://localhost:4000/");
        setMovieList(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="movies"
      >
        {movieList.length > 0 &&
          movieList.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
      </motion.div>
    </section>
  );
}

export default MovieList;
