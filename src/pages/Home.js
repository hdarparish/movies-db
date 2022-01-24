import Header from "../components/Header";
import Categories from "../components/Categories";
import MovieList from "../components/MovieList";
//router
import { useLocation } from "react-router-dom";
//animation
import { motion } from "framer-motion";

function Home() {
  const location = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      {location.pathname === "/" && <Categories />}

      <MovieList />
    </motion.div>
  );
}

export default Home;
