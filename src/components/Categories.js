import React, { useState, useEffect } from "react";

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

  //on initialization set active to top category
  useEffect(() => {
    document.querySelector("#category0").classList.toggle("active");
    setCategoryActive(document.querySelector("#category0"));
  }, []);
  return (
    <section>
      <div className="categories">
        {categories.map((genre, index) => (
          <p key={index} id={`category${index}`} onClick={toggleClass}>
            {genre}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Categories;
