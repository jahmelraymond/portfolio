import Typed from "react-typed";
import { useStateContext } from "../Provider/contextProvider";

export default function Skills() {
  const { context, setContext } = useStateContext();
  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100%",
        padding: "5rem 0",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
      id='skills'
    >
      <h1 style={{ margin: "5rem 0" }}>
        <Typed
          strings={["Skills/Technologies"]}
          typeSpeed={150}
          backSpeed={70}
          style={{
            fontSize: "45px",
            fontWeight: "100",
            padding: "0 35px",
            fontFamily: "Istok Web",
            margin: "5rem 0",
            textDecoration: "underline",
          }}
          contentType={"html"}
        />
      </h1>
      <div
        className="skills"
        style={{
          display: "grid",
          gridTemplateColumns: "172px 172px 172px 172px",
          justifyContent: "center",
          columnGap: "45px",
          rowGap: "30px",
          borderRadius: "10px",
        }}
      >
        {context.skills.length
          ? context.skills.map((item) => (
              <div
                className="skill"
                style={{ perspective: "1000px", margin: "0 0 10rem 0" }}
              >
                <div
                  className="skill-card-inner"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    transformStyle: "preserve-3d",
                    boxShadow: "0 4px 8px 0 rgba(0, 0 , 0, 0.2)",
                    transition: "transform 0.6s",
                  }}
                >
                  <div className="skill-card-front">
                    <img
                      src={item.skill}
                      alt=""
                      style={{
                        height: "152px",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div
                    className="skill-card-back"
                    style={{ position: "absolute" }}
                  >
                    <p style={{ textAlign: "center", fontSize: "24px" }}>
                      {item.name}
                    </p>
                  </div>

                  {/* <h1>{context.skills.name}</h1> */}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
