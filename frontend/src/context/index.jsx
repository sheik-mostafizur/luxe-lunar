import {ThemeProvider} from "@mui/material";
import {createContext, useContext} from "react";
import {theme} from "./theme";

const RootContext = createContext({});

export const useRootContext = () => useContext(RootContext);

const RootProvider = ({children}) => {
  return (
    <RootContext.Provider value={{}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RootContext.Provider>
  );
};

export default RootProvider;
