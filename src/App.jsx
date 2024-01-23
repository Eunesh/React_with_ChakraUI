import { useState, useContext } from "react";

import { MyContext } from "./context";

function App() {
  const { count, Increment, Decrement } = useContext(MyContext);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export default App;
