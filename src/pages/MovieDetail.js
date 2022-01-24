import React, { useEffect } from "react";
//router
import { useNavigate, useLocation } from "react-router-dom";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//animation
import { motion } from "framer-motion";
import {
  detailPageAnimation,
  detailAnimation,
  detailBtnAnimation,
} from "../Animation";
//icon
import starIcon from "../img/star.svg";

function MovieDetail() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const dispatch = useDispatch();

  const { movieDetail, isLoading } = useSelector((state) => state.detail);

  useEffect(() => {
    const movieURL = location.split("/");
    const movieID = movieURL[movieURL.length - 1];
    dispatch(loadDetail(movieID));
  }, []);

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
                initial="hidden"
                animate="show"
                whileHover="hover"
                exit="exit"
                variants={detailBtnAnimation}
                onClick={() => navigate(-1)}
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
