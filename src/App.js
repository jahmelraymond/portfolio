import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import ContextProvider from "./Provider/contextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="App" style={{ height: "100%" }}>
          <Navbar />
          <Hero />
          {/* <About /> */}
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
