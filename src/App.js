import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects'
import Work from './components/Work'
import ContextProvider from "./Provider/contextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="App" style={{ height: "100%" }}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects/>
          <Work />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
