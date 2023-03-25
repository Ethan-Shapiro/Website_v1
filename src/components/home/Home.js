import * as React from "react";
import Header from "../header/Header";
import "./home.css";
import CustomLink from "../common/CustomLink/CustomLink";
import Separator from "../common/seperator/Seperator";
import About from "../body/about/About";
import Experience from "../body/experience/Experience";
import Projects from "../body/projects/Projects";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="home">
        <About></About>
        <Separator />
        <Experience></Experience>
        <Separator />
        <Projects></Projects>
        <Separator />
      </div>
    </div>
  );
};

export default Home;
