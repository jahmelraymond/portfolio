import Typed from "react-typed";
export default function Work() {
  return (
    <div className="container" id="work">
      <div
        className="header"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>
          <Typed
            strings={["Work History"]}
            typeSpeed={150}
            backSpeed={70}
            style={{
              fontSize: "45px",
              fontWeight: "100",
              padding: " 35px",
              fontFamily: "Istok Web",
              margin: "0 0 2rem 0",
              fontStyle: "normal",
            }}
          />
        </h1>
      </div>
      <div className="roles" style={{ padding: "30px 20px", display: "flex" }}>
        <div
          className="container"
          style={{ dipslay: "flex", flexDirection: "column", padding: "10px" }}
        >
          <h3
            style={{
              fontFamily: "Istok Web",
              fontSize: "26px",
              margin: "5px 0",
              textAlign:'center'
            }}
          >
            Full-Stack Developer |
            <span style={{ fontWeight: "100" }}> Jan 2024 - Present</span>
          </h3>
          <p
            style={{
              fontFamily: "Istok Web",
              fontSize: "20px",
              margin: "5px 0",
              textAlign:'center'

            }}
          >
            Banyan Labs - Remote
          </p>
          <ul
            style={{
              margin: "5px 0",
              fontSize: "20px",
              fontFamily: "Istok Web",
            }}
          >
            <li>
              Developed responsive web applications from scratch, ensuring
              cross-browser compatibility and mobile responsiveness.
            </li>
            <li>
              Implement agile methodologies to dissect UI design into practical
              sprints and achievable tickets within Confluence and Jira.
            </li>
            <li>
              Create UI design & layou of multiple web applications using Figma.
            </li>
            <li>
              Implemented UI/UX designs, collaborating closely with designers to
              achieve visually appealing and functional interfaces.
            </li>
          </ul>
        </div>

        <div
          className="container"
          style={{ dipslay: "flex", flexDirection: "column", padding: "10px" }}
        >
          <h3
            style={{
              fontFamily: "Istok Web",
              fontSize: "26px",
              margin: "5px 0",
              textAlign:'center'

            }}
          >
            Full-Stack Developer |{" "}
            <span style={{ fontWeight: "100" }}> Nov 2022 - Nov 2023</span>
          </h3>
          <p
            style={{
              fontFamily: "Istok Web",
              fontSize: "20px",
              margin: "5px 0",
              textAlign:'center'

            }}
          >
            Persevere Now - Eloy, AZ
          </p>
          <ul
            style={{
              margin: "5px 0",
              fontSize: "20px",
              fontFamily: "Istok Web",
            }}
          >
            <li>
              Worked closely with UI/UX designers, contributed to front-end and
              back-end development.
            </li>
            <li>
              Collaborated with the development team to ensure seamless
              integration of components.
            </li>
            <li>Demonstrated growth and improvement in technical abilities.</li>
            <li>
              Implemented UI/UX designs, collaborating closely with designers to
              achieve visually appealing and functional interfaces.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
