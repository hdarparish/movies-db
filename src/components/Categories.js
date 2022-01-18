import React, { useState, useEffect } from "react";
//animation
import { motion } from "framer-motion";
import { categoryAnimation } from "../Animation";
//redux
import { useDispatch } from "react-redux";
import { loadMovies } from "../actions/moviesAction";

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
  const [categoryActive, setCategoryActive] = useState("Top");

  const dispatch = useDispatch();
  const fetchMovieList = (category) => {
    dispatch(loadMovies(category));
  };

  //toggle active class, remove from previous element and add to the clicked element
  const toggleClass = (e) => {
    const active = document.querySelector(`#${categoryActive}`);
    active.classList.toggle("active");
    e.target.classList.toggle("active");
    setCategoryActive(e.target.id);
    fetchMovieList(e.target.id);
  };

  //on initialization set active to top category and get the movie list
  useEffect(() => {
    document.querySelector(`#${categoryActive}`).classList.toggle("active");
    fetchMovieList(categoryActive);
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
          <motion.p key={index} id={genre} onClick={toggleClass}>
            {genre}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}

export default Categories;
