import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
// import About from "./pages/About";
import Projects from "./pages/Projects";
import NewNavbar from "./components/NewNav";
import NewAbout from "./pages/NewAbout";
// import AnimatedNav from "./components/AnimatedNav";
import Footer from "./components/Footer";

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NewNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<NewAbout />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
