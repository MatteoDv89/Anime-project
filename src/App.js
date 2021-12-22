import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import Details from "./components/Details";
import AddAnime from "./components/AddAnime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddAnime />} />
          <Route path="/details/anime/info/:id" element={<Details />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
