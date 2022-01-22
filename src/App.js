import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./styles/app.scss";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        {!location.pathname.includes("/movie") && <Header />}
        <Routes location={location} key={location.key}>
          <Route path="/*" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
