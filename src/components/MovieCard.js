//router
import { Link } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { movieItemAnimation } from "../Animation";
//lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";

function MovieCard({ movie }) {
  return (
    <motion.div className="card" variants={movieItemAnimation}>
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
            className="details__button"
          >
            <Link to={`/${movie._id}`}>
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
