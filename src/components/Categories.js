import React, { useState, useEffect } from "react";
//animation
import { motion } from "framer-motion";

const categories = [
  "Top",
  "Action",
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
  "Romance",
  "Sci-Fi",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

function Categories() {
  const [categoryActive, setCategoryActive] = useState(null);

  //toggle active class, remove from previous element and add to the clicked element
  const toggleClass = (e) => {
    categoryActive.classList.toggle("active");
    e.target.classList.toggle("active");
    setCategoryActive(e.target);
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    hidden: { opacity: 0 },
  };
  //on initialization set active to top category
  useEffect(() => {
    document.querySelector("#category0").classList.toggle("active");
    setCategoryActive(document.querySelector("#category0"));
  }, []);
  return (
    <section>
      <motion.div
        className="categories"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {categories.map((genre, index) => (
          <motion.p key={index} id={`category${index}`} onClick={toggleClass}>
            {genre}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}

export default Categories;
