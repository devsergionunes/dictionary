/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme } from "@mui/material";

import ThemeDark from "./themeDark";
import ThemeLight from "./themeLight";

export function alterTheme(typeTheme = "light") {
  let theme;
  if (typeTheme === "light") {
    theme = createTheme(ThemeLight as any);
  } else if (typeTheme === "dark") {
    theme = createTheme(ThemeDark as any);
  }
  return theme;
}
alterTheme();
