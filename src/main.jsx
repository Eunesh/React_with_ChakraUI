import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./context.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
