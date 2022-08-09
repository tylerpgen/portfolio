import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
