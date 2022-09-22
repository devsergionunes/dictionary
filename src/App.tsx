import { ThemeProvider as ThemeMaterial, ThemeOptions } from "@mui/material";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { MyRoutes } from "./routes";
import { useAppSelector } from "./store/hooks";
import { GlobalStyle } from "./styles/Global";

function App() {
  const theme = useAppSelector(({ Utils }) => Utils.theme.object);

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <ThemeMaterial theme={theme as ThemeOptions}>
        <MyRoutes />
        <GlobalStyle />
      </ThemeMaterial>
    </ThemeProvider>
  );
}

export default App;
