import "@fontsource/inter";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
// import {} from "@mui/ma"

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const theme = extendTheme({
  colorSchemes: {},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="light" theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  </React.StrictMode>
);
