import { motion } from "framer-motion";
import Categories from "../components/Categories";
import Header from "../components/Header";
import MovieList from "../components/MovieList";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Categories />
      <MovieList />
    </motion.div>
  );
}

export default Home;
