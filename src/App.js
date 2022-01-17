import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./styles/app.scss";
//Router
import {
  Routes,
  Route,
  Router,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" element={<MovieDetail />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
