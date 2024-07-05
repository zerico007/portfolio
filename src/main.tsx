import type { ThemeOverride } from "@chakra-ui/react";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme: ThemeOverride = {
  styles: {
    global: (props) => ({
      "html, body": {
        color:
          props.colorMode === "dark"
            ? "var(--light-text-color)"
            : "var(--dark-text-color)",
        backgroundColor:
          props.colorMode === "dark"
            ? "var(--dark-theme-color)"
            : "var(--light-theme-color)",
        fontFamily: "var(--font-family-base)",
      },
      "nav, footer": {
        backgroundColor:
          props.colorMode === "dark"
            ? "var(--dark-theme-color)"
            : "var(--light-theme-color)",
      },
      nav: {
        color:
          props.colorMode === "dark"
            ? "var(--light-text-color)"
            : "var(--dark-text-color)",
      },
      "footer, section": {
        color:
          props.colorMode === "dark"
            ? "var(--light-text-color)"
            : "var(--darker-light-text-color)",
      },
    }),
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
};

const customTheme = extendTheme(theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
