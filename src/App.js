import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import AnimatedNav from "./components/AnimatedNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
