import React, { useState, useEffect } from "react";
import axios from "axios";
//router
import { useLocation, useNavigate } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
//animation
import { motion } from "framer-motion";
import { pageAnimation, detailAnimation } from "../Animation";
//icon
import starIcon from "../img/star.svg";

function MovieDetail() {
  const history = useLocation();
  const navigate = useNavigate();
  const url = history.pathname.replaceAll("/", "");

  //const [movie, setMovie] = useState(null);
  const movie = useSelector((state) => state.details.movieDetail);

  return (
    <>
      {movie && (
        <motion.section
          style={{
            backgroundImage: ` linear-gradient(90deg, rgba(0, 0, 0, 0.765) 48.37%, rgba(0, 0, 0, 0) 94.1%, rgba(0, 0, 0, 0) 100.92%), url(${movie.poster}.JPG)`,
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
                  backgroundColor: "#00000000",
                  color: "#FFFF",
                }}
                onClick={() => navigate("/")}
              >
                Return
              </motion.button>
            </div>
            <motion.div variants={detailAnimation}>
              <h1 className="detail__title">{movie.title}</h1>
              <div className="detail__year-runtime">
                <p className="detail__year">{movie.released}</p>
                <p className="detail__runtime">{movie.runtime}</p>
              </div>

              <div className="detail__ratings">
                <p>{movie.rating.$numberDecimal.toString()} / 10</p>
                <img src={starIcon} alt="Star Icon" />
                <p>
                  {movie.votes.toLocaleString("en", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  votes
                </p>
              </div>
            </motion.div>
            <motion.div variants={detailAnimation}>
              <p className="detail__description">{movie.description}</p>
            </motion.div>
            <motion.div variants={detailAnimation}>
              <p className="detail__director">
                <span>Director: </span>
                {movie.directors.join(", ")}
              </p>
              <p className="detail__stars">
                <span>Stars: </span>
                {movie.actors.join(", ")}
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </>
  );
}

export default MovieDetail;
