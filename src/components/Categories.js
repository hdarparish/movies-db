import React, { useState, useEffect } from "react";
//animation
import { motion } from "framer-motion";
import { categoryAnimation } from "../Animation";
//redux
import { useDispatch } from "react-redux";
import { loadTopMovies, loadGenre } from "../actions/moviesAction";

const categories = [
  "Top",
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Musical",
  "Mystery",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "War",
  "Western",
];

function Categories() {
  const [categoryActive, setCategoryActive] = useState(null);

  const dispatch = useDispatch();
  const fetchMovieList = (category = null) => {
    if (category === null || category === "Top") {
      dispatch(loadTopMovies());
    } else {
      dispatch(loadGenre(category));
    }
  };

  //toggle active class, remove from previous element and add to the clicked element
  const toggleClass = (e) => {
    categoryActive.classList.toggle("active");
    e.target.classList.toggle("active");
    setCategoryActive(e.target);
    fetchMovieList(e.target.id);
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  //on initialization set active to top category
  useEffect(() => {
    document.querySelector("#Top").classList.toggle("active");
    setCategoryActive(document.querySelector("#Top"));
  }, []);
  return (
    <section>
      <motion.div
        className="categories"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={categoryAnimation}
      >
        {categories.map((genre, index) => (
          <motion.p
            key={index}
            id={genre}
            /* id={`category${index}`} */ onClick={toggleClass}
          >
            {genre}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}

export default Categories;
