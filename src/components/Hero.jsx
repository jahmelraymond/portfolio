import Typed from "react-typed";
import Back from "../images/backone.png";
import { useState } from "react";
// import Contact from "../components/Contact";
import { useStateContext } from "../Provider/contextProvider";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { context, setContext } = useStateContext();
  const nav = useNavigate();

  return (
    <>
      {/* {console.log(myForm)} */}
      {/* <Contact /> */}
      <div
        className="container"
        style={{
          backgroundImage: `url(${Back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: "100%",
          padding: "0 0 30rem 0",
        }}
      >
        <div className="content" style={{ padding: "2.5rem 0 " }}>
          <h1
            style={{
              fontFamily: "cambo",
              letterSpacing: ".25px",
              fontWeight: "400",
              marginBottom: "0",
              display: "flex",
              flexDirection: "column",
              fontSize: "48px",
              color: "white",
              // padding: "5rem 0 0 10px",
            }}
          >
            <span style={{ margin: "0 0 0 30px" }}>Hi,</span>
            <span style={{ margin: "0 0 0 60px" }}>I'm Jahmel,</span>
            <span style={{ fontSize: "64px", margin: "0 0 0 90px" }}>
              {`A `}

              <Typed
                strings={["Full-Stack Developer", "Web Designer"]}
                typeSpeed={150}
                backSpeed={70}
                // loop
                style={{
                  fontSize: "64px",
                  fontFamily: "cambo",
                  color: "royalblue",
                }}
              />
            </span>
          </h1>
        </div>
        <div
          className="links"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0 0 0",
          }}
        >
          <button
            style={{
              border: "solid 0.5px royalblue",
              fontSize: "26px",
              borderRadius: "5px",
              padding: "10px",
              margin: "0 20px 0 0",
              fontFamily: "Istok Web",
              // color: "royalblue",
            }}
            onClick={() => setContext((prev) => ({ ...prev, form: true }))}
          >
            Contact Me
          </button>
          <button
            style={{
              border: "solid 0.5px royalblue",
              fontSize: "26px",
              borderRadius: "5px",
              padding: "10px",
              margin: "0 0 0 20px",
              fontFamily: "Istok Web",
              // color: "royalblue",
              margin: "0 0 0 10px",
            }}
          >
            <a
              style={{
                color: "royalblue",
                textDecoration: "none",
                fontSize: "26px",
              }}
              href="https://drive.google.com/file/d/1z6YROXk7hATF8T4GLXjh9nvfk460bxES/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
