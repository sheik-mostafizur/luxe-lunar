import {ThemeProvider} from "@mui/material";
import {createContext, useContext} from "react";
import {theme} from "./theme";
import AuthContext from "./AuthContext";

const RootContext = createContext({});

export const useRootContext = () => useContext(RootContext);

const RootProvider = ({children}) => {
  return (
    <RootContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <AuthContext>{children}</AuthContext>
      </ThemeProvider>
    </RootContext.Provider>
  );
};

export default RootProvider;
