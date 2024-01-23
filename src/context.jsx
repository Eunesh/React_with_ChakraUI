import React, { createContext, useState } from "react";

export const MyContext = createContext({});

const ContextProvider = ({ children }) => {
  let [count, setCount] = useState(0);

  function Increment() {
    setCount(count++);
  }

  function Decrement() {
    setCount(count--);
  }

  return (
    <MyContext.Provider value={{ count, Increment, Decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
