import React, { useState, useEffect } from "react";
//router
import { useLocation, useNavigate } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import axios from "axios";

function MovieDetail() {
  const history = useLocation();
  const navigate = useNavigate();
  const url = history.pathname.replaceAll("/", "");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.get("http://localhost:4000/");
        const currentMovie = data.filter((movie) => movie._id === url).pop();
        setMovie(currentMovie);
        console.log(currentMovie.poster);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const pageAnimation = {
    hidden: {
      opacity: 0,
      y: -300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      /*       y: -300, */
      transition: {
        duration: 0.5,
      },
    },
  };

  const detailAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      style={{
        backgroundImage: ` linear-gradient(90deg, rgba(0, 0, 0, 0.765) 48.37%, rgba(0, 0, 0, 0) 94.1%, rgba(0, 0, 0, 0) 100.92%), url(${movie?.poster}.JPG)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="detail-wrapper__background-image"
    >
      <motion.div className="detail">
        <div className="return__btn">
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "transparent",
              color: "#FFFF",
            }}
            onClick={() => navigate("/")}
          >
            Return
          </motion.button>
        </div>
        <motion.div variants={detailAnimation}>
          <h1 className="detail__title">{movie?.title}</h1>
          <div className="detail__year-runtime">
            <p className="detail__year">{movie?.released}</p>
            <p className="detail__runtime">{movie?.runtime}</p>
          </div>

          <div className="detail__ratings">
            <p>9.2 / 10</p>
            <p>1.7M votes</p>
          </div>
        </motion.div>
        <motion.div variants={detailAnimation}>
          <p className="detail__description">{movie?.description}</p>
        </motion.div>
        <motion.div variants={detailAnimation}>
          <p className="detail__director">
            <span>Director:</span> {movie?.directors.join(", ")}
          </p>
          <p className="detail__stars">
            <span>Stars:</span>
            {movie?.actors.join(", ")}
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default MovieDetail;
