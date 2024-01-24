import Typed from "react-typed";
import { useState } from "react";

export default function Projects() {
  const [state, setState] = useState({
    projects: [
      "Project 1",
      "Project 2",
      "Project 3",
      "Project 4",
      "Project 5",
      "Project 6",
    ],
  });
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        height: "1250px",
      }}
      id='projects'
    >
      <h1>{`<> </>`}</h1>
      <Typed
        strings={["Apps I've Built"]}
        typeSpeed={150}
        backSpeed={70}
        style={{
          fontSize: "45px",
          fontWeight: "100",
          padding: "0 35px",
          fontFamily: "Istok Web",
          margin: "0 0 2rem 0",
        }}
      />
      <div
        className="projects"
        style={{
          display: "grid",
          gridTemplateColumns: "600px 600px 600px",
          gridTemplateRows: "300px 300px",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "20px",
          rowGap: "30px",
          width: "100%",
          gridTemplateRows: "200px 200px",
        }}
      >
        {state.projects.length
          ? state.projects.map((item) => (
              <div
                className="item"
                style={{
                  border: "solid 0.5px black",
                  height: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p>{item}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
