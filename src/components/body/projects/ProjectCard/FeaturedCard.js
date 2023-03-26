import React from "react";
import { Stack, Typography, Box, Paper } from "@mui/material";
import "./FeaturedCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import styled from "styled-components";

const FeaturedContainer = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  grid-area: 1 / 1 / -1 / 7;
`;

const ImageContainer = styled.div<{ rowStart: boolean }>`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  grid-area: ${} / ${} / ${} / ${};
  position: relative;
  z-index: 1;
`;

const FeaturedCard = (props) => {
  return (
    <div className="featured-project-container">
      <div className="project-image">
        <a href="/">
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </a>
      </div>
      <div className="project-content">
        <Stack sx={{ width: "100%", height: "100%" }} spacing={1}>
          <Typography variant="body2">Featured Project</Typography>
          <Typography variant="h4">Gamer Time</Typography>
          <Paper elevation={10} sx={{ p: 1, backgroundColor: "red" }}>
            <Typography variant="body1">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </Typography>
          </Paper>
          <Stack direction="row" spacing={2}>
            <Typography variant="subtitle1">React</Typography>
            <Typography variant="subtitle1">Styled Components</Typography>
            <Typography variant="subtitle1">Firebase</Typography>
            <Typography variant="subtitle1">CI/CD</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <GitHubIcon></GitHubIcon>
            <LaunchIcon></LaunchIcon>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default FeaturedCard;
