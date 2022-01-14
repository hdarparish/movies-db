import React from "react";
//animation
import { motion } from "framer-motion";

function Header() {
  return (
    <header>
      <motion.div
        className="logo"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.h1>MOVIES</motion.h1>
        <motion.h3>DATABASE</motion.h3>
      </motion.div>
      <motion.div
        className="header-input"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
      >
        <input type="text" placeholder="Search Database" />
      </motion.div>
    </header>
  );
}

export default Header;
