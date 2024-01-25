import Typed from "react-typed";
import { useStateContext } from "../Provider/contextProvider";
export default function About() {
  const {context , setContext} = useStateContext()
  return (
    <div
      className="container"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "5rem 1rem 5rem 1rem",
      }}
    >
      <div className="header">
        <h1>
          <Typed
            strings={["About Me"]}
            typeSpeed={150}
            backSpeed={70}
            style={{
              fontSize: "45px",
              fontWeight: "100",
              padding: "0 35px",
              fontFamily: "Istok Web",
            }}
          />
        </h1>
      </div>
      <div className="info">
        <p
          style={{
            fontSize: "35px",
            fontFamily: "Istok Web",
            color: "black",
            padding: "0 35px",
            textAlign: "center",
          }}
        >
          I am a graduate from Persevere Now Coding Bootcamp, I am jr full-stack
          developer, I create and design websites & mobile applications using
          HTML, CSS, JS, React, MongoDB, Express, & Node.js familiar with
          front-end & back-end concepts currently looking to learn and use new &
          existing technologies, libraries, & languages based upon your
          preference.
        </p>
      </div>
      <div
        className="links"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <button
          style={{
            border: "none",
            padding: "10px",
            fontSize: "30px",
            borderRadius: "10px",
            color: "black",
            fontFamily:'Istok Web'
          }}
          onClick={() => setContext(prev => ({
            ...prev,
            form:true
          }))}
        >
          Contact Me
        </button>
        <button
          style={{
            border: "none",
            padding: "10px",
            fontSize: "30px",
            borderRadius: "10px",
            color: "black",
            fontFamily:'Istok Web'
          }}
        >
          <a href="#projects" style={{textDecoration:'none' , color:'black'}}>Projects</a>
        </button>
      </div>
    </div>
  );
}
