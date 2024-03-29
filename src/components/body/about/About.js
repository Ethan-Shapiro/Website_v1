import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import "../about/About.css";

const About = () => {
  return (
    <Grid
      display="flex"
      container
      direction={"column"}
      className={"about"}
      sx={{ m: 0, mt: 2 }}
    >
      <Grid item container justifyContent="center">
        <Paper
          sx={{
            width: "25%",
            height: "auto",
            borderRadius: "100%",
            overflow: "hidden",
            display: "flex",
          }}
          justifyContent="center"
          elevation={5}
        >
          <img
            alt="Beautiful Headshot of me"
            src={require("../../../assets/centered headshot.jpg")}
            style={{ width: "100%", height: "auto" }}
          />
        </Paper>
      </Grid>
      <Grid item>
        <Typography variant="h4" display="inline">
          {"Hi! I'm "}
        </Typography>
        <Typography variant="h4" display="inline" color={"primary"}>
          {"Ethan Shapiro 👋"}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "500px" }}>
          I'm in 4th and final year studying Data Science at UC San Diego with a
          passion for machine learning applications in gaming and esports 🎮. I
          also have experience developing using full stack technologies, some of
          which I used to build this website! Please take a look around and let
          me know what you think in the contact form 😊
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
