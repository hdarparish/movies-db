import Categories from "../components/Categories";
import MovieList from "../components/MovieList";
//animation
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Categories />
      <MovieList />
    </motion.div>
  );
}

export default Home;
