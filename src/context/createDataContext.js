import React, { useReducer, createContext } from "react";
export default (reducer, action, initialState) => {
  const Context = createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
  };
  return { Context, Provider };
};
