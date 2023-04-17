import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import SearchPage from "./components/SearchPage";
import UserPage from "./components/UserPage";

const theme = {
  baseColor: "#006aff",
  darkColor: "#1a1e22",
  darkColor1: "#292E34",
  lightColor: "#f7f7f7",

  font1: `'Work Sans', sans-serif`,
  font2: `font-family: 'Fira Code', monospace`,
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route index path="/" element={<SearchPage />} />
          <Route path="/:param" element={<UserPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
