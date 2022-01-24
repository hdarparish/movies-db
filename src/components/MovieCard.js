//router
import { Link, useLocation } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
//animation
import { motion } from "framer-motion";
import { movieItemAnimation } from "../Animation";
//lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const resetSearch = () => {
    if (location.includes("/search")) {
      dispatch({ type: "CLEAR_SEARCHED" });
    }
  };
  return (
    <motion.div
      className="card"
      initial="hidden"
      animate="show"
      variants={movieItemAnimation}
      exit="exit"
    >
      <div>
        <LazyLoadImage src={movie.poster} alt="poster" />
      </div>
      <div className="overlay">
        <div className="details">
          <p>
            {movie.title} {movie.released}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="details__button"
            onClick={resetSearch}
          >
            <Link to={`/movie/${movie._id}`}>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#818997",
                  color: "#FFFF",
                }}
              >
                Details
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default MovieCard;
