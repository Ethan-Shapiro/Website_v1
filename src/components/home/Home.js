import * as React from "react";
import Header from "../header/Header";
import "./home.css";
import CustomLink from "../common/CustomLink/CustomLink";
import Separator from "../common/seperator/Seperator";
import About from "../body/about/About";
import Experience from "../body/experience/Experience";
import Projects from "../body/projects/Projects";
import FeaturedProjects from "../body/projects/FeaturedProjects";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#64FFDB",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#0a192f",
      paper: "#243247",
    },
    text: {
      primary: "#fdfdfd",
      secondary: "#8892b0",
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header></Header>
      <div className="home">
        <About></About>
        <Separator />
        <Experience></Experience>
        <Separator />
        <FeaturedProjects></FeaturedProjects>
        <Separator />
        <Projects></Projects>
        <Separator />
      </div>
    </ThemeProvider>
  );
};

export default Home;
