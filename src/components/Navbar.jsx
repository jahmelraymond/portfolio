import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Typed from "react-typed";
import { useStateContext } from "../Provider/contextProvider";

export default function Navbar() {
  const { context, setContext } = useStateContext();

  return (
    <div
      className="nav"
      style={{
        backgroundColor: "gainsboro",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        height: "65px",
        // margin: "0 0 5rem 0",
      }}
    >
      <div
        className="name"
        style={{
          flex: ".75",
          justifyContent: "flex-start",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typed
          strings={[
            '<span style="color:black;">J</span> <span style="color:white">R</span>',
          ]}
          typeSpeed={100}
          style={{
            color: "black",
            fontSize: "35px",
            fontWeight: "500",
            margin: "0 15px",
            fontFamily: "Istok Web",
            fontStyle: "normal",
          }}
        />
      </div>
      <div
        className="links"
        style={{
          flex: "1.5",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            fontSize: "40px",
            margin: "0",
            fontFamily: "Istok Web",
            padding: "0",
          }}
        >
          <li
            style={{
              padding: "5px",
              fontSize: "30px",
              margin: "0 5px",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            Skills
          </li>
          <li
            style={{
              padding: "5px",
              fontSize: "30px",
              margin: "0 5px",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            Projects
          </li>
          <li
            style={{
              padding: "5px",
              fontSize: "30px",
              margin: "0 5px",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            Work
          </li>
          {/* <li onClick={() => nav('https://github.com/jahmelraymond' , {replace : true})}><AiFillGithub /></li>
                <li  onClick={() => nav('www.linkedin.com/in/jahmel-raymond-a2b0182a8' , {replace : true})}><AiFillLinkedin /> </li> */}
        </ul>
      </div>
      <div
        className="socialLinks"
        style={{ display: "flex", flex: ".75", justifyContent: "flex-end" }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            wordSpacing: "5px",
            fontSize: "40px",
            margin: "0",
            alignItems: "center",
          }}
        >
          <li
            onClick={() =>
              setContext((prev) => ({
                ...prev,
                form: true,
              }))
            }
          >
            <a style={{ color: "royalblue" }} href="#">
              <AiFillMail />
            </a>
          </li>
          <li>
            <a
              style={{ color: "black" }}
              href="https://github.com/jahmelraymond"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              style={{ color: "royalblue" }}
              href="https://www.linkedin.com/in/jahmel-raymond-a2b0182a8"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
