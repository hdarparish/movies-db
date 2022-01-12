import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

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
  return (
    <section>
      <div className="movies">
        {movieList.length > 0 &&
          movieList.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
      </div>
    </section>
  );
}

export default MovieList;
