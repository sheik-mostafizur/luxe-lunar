import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import CssBaseline from "@mui/material/CssBaseline";
import RootProvider from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </RootProvider>
  </React.StrictMode>
);
