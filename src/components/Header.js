import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { headerAnimation } from "../Animation";

function Header() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const clearSearched = () => {
    navigate("/");
    window.location.reload();
    setSearchQuery("");
  };

  return (
    <header>
      <motion.div
        className="logo"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={headerAnimation}
        whileHover={{ scale: 1.1 }}
        onClick={clearSearched}
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
