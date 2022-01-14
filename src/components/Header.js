import React from "react";
//animation
import { motion } from "framer-motion";
import { headerAnimation } from "../Animation";

function Header() {
  return (
    <header>
      <motion.div
        className="logo"
        initial="hidden"
        animate="show"
        variants={headerAnimation}
        whileHover={{ scale: 1.1 }}
      >
        <motion.h1>MOVIES</motion.h1>
        <motion.h3>DATABASE</motion.h3>
      </motion.div>
      <motion.div
        className="header-input"
        initial="hidden"
        animate="show"
        variants={headerAnimation}
      >
        <input type="text" placeholder="Search Database" />
      </motion.div>
    </header>
  );
}

export default Header;
