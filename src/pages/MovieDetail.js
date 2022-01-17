import React, { useState, useEffect } from "react";
import axios from "axios";
//router
import { useLocation, useNavigate } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
//animation
import { motion, AnimatePresence } from "framer-motion";
import { detailPageAnimation, detailAnimation } from "../Animation";
//icon
import starIcon from "../img/star.svg";

function MovieDetail() {
  const history = useLocation();
  const navigate = useNavigate();
  const url = history.pathname.replaceAll("/", "");

  //const [movie, setMovie] = useState(null);
  const { movieDetail, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <motion.section
          style={{
            backgroundImage: ` linear-gradient(90deg, rgba(0, 0, 0, 0.765) 48.37%, rgba(0, 0, 0, 0) 94.1%, rgba(0, 0, 0, 0) 100.92%), url(${movieDetail.poster}.JPG)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          exit="exit"
          variants={detailPageAnimation}
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
              <h1 className="detail__title">{movieDetail.title}</h1>
              <div className="detail__year-runtime">
                <p className="detail__year">{movieDetail.released}</p>
                <p className="detail__runtime">{movieDetail.runtime}</p>
              </div>

              <div className="detail__ratings">
                <p>{movieDetail.rating.$numberDecimal.toString()} / 10</p>
                <img src={starIcon} alt="Star Icon" />
                <p>
                  {movieDetail.votes.toLocaleString("en", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  votes
                </p>
              </div>
            </motion.div>
            <motion.div variants={detailAnimation}>
              <p className="detail__description">{movieDetail.description}</p>
            </motion.div>
            <motion.div variants={detailAnimation}>
              <p className="detail__director">
                <span>Director: </span>
                {movieDetail.directors.join(", ")}
              </p>
              <p className="detail__stars">
                <span>Stars: </span>
                {movieDetail.actors.join(", ")}
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </>
  );
}

export default MovieDetail;
