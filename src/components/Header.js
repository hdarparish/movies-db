import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { headerAnimation } from "../Animation";

import { loadQuery } from "../actions/moviesAction";
import { useDispatch } from "react-redux";

function Header() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?q=${searchQuery}`);
      dispatch(loadQuery(searchQuery));
    } else {
      clearSearched();
    }
  };

  const clearSearched = () => {
    navigate("/");
    window.location.reload();
    setSearchQuery("");
  };

  /*   useEffect(() => {
    cancelToken = axios.CancelToken.source();
    if (searchQuery) {
      dispatch(loadQuery(searchQuery, cancelToken.token));
      navigate("/search");
    }

    return () => {
      cancelToken.cancel(`Cancel fetchStream `);
    };
  }, [searchQuery]); */

  return (
    <header>
      <motion.div
        className="logo"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={headerAnimation}
        whileHover={{ scale: 1.1 }}
        onClick={clearSearched} /* {
          navigate("/");
          window.location.reload();
          setSearchQuery("");
        }} */
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
        <form action="" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Database"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </motion.div>
    </header>
  );
}

export default Header;
