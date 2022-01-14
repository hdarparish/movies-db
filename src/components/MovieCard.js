//animation
import { motion } from "framer-motion";
//router
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.75, ease: "easeOut", duration: 1 },
    },
  };
  return (
    <motion.div className="card" variants={item}>
      <div>
        <img src={movie.poster} alt="" />
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
