import React, { useState, useEffect } from "react";
//animation
import { motion } from "framer-motion";
import { categoryAnimation, categoryItemAnimation } from "../Animation";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadCategory } from "../actions/categoryAction";

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
  const { category } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  const fetchMovieList = (category) => {
    dispatch(loadCategory(category, 0));
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
    if (category) {
      setCategoryActive(category);
      document.querySelector(`#${category}`).classList.toggle("active");
      // fetchMovieList(category);
    } else {
      document.querySelector(`#${categoryActive}`).classList.toggle("active");
      fetchMovieList(categoryActive);
    }
  }, []);
  return (
    <section>
      <motion.ul
        className="categories"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={categoryAnimation}
      >
        {categories.map((genre, index) => (
          <motion.li
            key={index}
            id={genre}
            variants={categoryItemAnimation}
            onClick={toggleClass}
          >
            {genre}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Categories;
