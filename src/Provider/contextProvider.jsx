import React, { useContext, useState, createContext } from "react";

const stateContext = createContext();

export const useStateContext = () => useContext(stateContext);

function ContextProvider({ children }) {
  const [context, setContext] = useState({
    name: "",
    email: "",
    message: "",
    form: false,
    resume:false,
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
