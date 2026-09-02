"use client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#c9748a" },
    secondary: { main: "#7c6fa8" },
    background: { default: "#050810", paper: "#0d1628" },
    text: { primary: "#f5f0eb", secondary: "rgba(245,240,235,0.7)" },
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
  },
});

export default function MuiProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
