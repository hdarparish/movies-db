import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { headerAnimation } from "../Animation";

import { loadQuery } from "../actions/moviesAction";
import { useDispatch } from "react-redux";
import axios from "axios";

function Header() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  let cancelToken;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    cancelToken = axios.CancelToken.source();
    if (searchQuery) {
      dispatch(loadQuery(searchQuery, cancelToken.token));
    }

    return () => {
      cancelToken.cancel(`Cancel fetchStream `);
    };
  }, [searchQuery]);

  return (
    <header>
      <motion.div
        className="logo"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={headerAnimation}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/")}
      >
        <motion.h1>MOVIES</motion.h1>
        <motion.h3>DATABASE</motion.h3>
      </motion.div>
      <motion.div
        className="header-input"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={headerAnimation}
      >
        <input
          type="text"
          placeholder="Search Database"
          value={searchQuery}
          onChange={handleSearch}
        />
      </motion.div>
    </header>
  );
}

export default Header;
