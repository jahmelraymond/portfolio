import React, { useContext, useState, createContext } from "react";
import JS from "../images/javascript.png";
import Jira from "../images/jira.png";
import BS from "../images/bootstrap.png";
import Mongo from "../images/mongo.png";
import Pug from "../images/pug.png";
import Express from "../images/express.png";
import CSS from "../images/css.png";
import ReactLogo from "../images/react.png";
import Jquery from "../images/jquery.png";
import Html from "../images/htmlSkill.png";
const stateContext = createContext();

export const useStateContext = () => useContext(stateContext);

function ContextProvider({ children }) {
  const [context, setContext] = useState({
    name: "",
    email: "",
    message: "",
    form: false,
    resume: false,
    skills: [
      { skill: Jira, name: "Jira" },
      { skill: ReactLogo, name: "React" },
      { skill: Express, name: "Express" },
      { skill: JS, name: "Javascript" },
      { skill: BS, name: "BootStrap" },
      { skill: CSS, name: "CSS3" },
      { skill: Html, name: "HTML5" },
      { skill: Mongo, name: "MongoDB" },
      { skill: Pug, name: "Pug" },
      { skill: Jquery, name: "Jquery" },
    ],
  });
  return (
    <stateContext.Provider
      value={{
        context,
        setContext,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}

export default ContextProvider;
