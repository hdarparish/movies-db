import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./styles/app.scss";
//Router
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter,
  Router,
} from "react-router-dom";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/:id" element={<MovieDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
