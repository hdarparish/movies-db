import react, { useState, useRef } from "react";

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
  const categoryRef = useRef(null);

  const toggleClass = (e) => {
    if (categoryActive) {
      categoryActive.classList.toggle("active");
      e.target.classList.toggle("active");
    } else {
      e.target.classList.toggle("active");
    }
    setCategoryActive(e.target);
  };
  return (
    <section>
      <div className="categories">
        {categories.map((genre, index) => (
          <p key={index} onClick={toggleClass} ref={categoryRef}>
            {genre}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Categories;
