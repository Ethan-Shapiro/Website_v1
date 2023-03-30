import React from "react";
import { Stack, Typography, Box, Paper } from "@mui/material";
import "./FeaturedCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import styled from "styled-components";
import { useEffect } from "react";

const FeaturedContainer = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
`;

const GridFirstParams = { rowStart: 1, colStart: 1, rowEnd: -1, colEnd: 7 };
const GridSecondParams = { rowStart: 1, colStart: 6, rowEnd: -1, colEnd: -1 };

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  grid-area: 1 / ${(props) => (!props.imageFirst ? 1 : 7)} / -1 /
    ${(props) => (!props.imageFirst ? 7 : -1)};
`;

const ImageContainer = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  grid-area: 1 / ${(props) => (props.imageFirst ? 1 : 6)} / -1 /
    ${(props) => (props.imageFirst ? 8 : -1)};
  position: relative;
  z-index: 1;
`;

const FeaturedCard = ({ imageFirst, projectInfo }) => {
  return (
    <FeaturedContainer>
      <ImageContainer imageFirst={imageFirst}>
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
      </ImageContainer>
      <ContentContainer imageFirst={imageFirst}>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            textAlign: imageFirst ? "right" : "left",
          }}
          spacing={1}
        >
          <Typography variant="body2">Featured Project</Typography>
          <Typography variant="h4">Gamer Time</Typography>
          <Paper elevation={10} sx={{ p: 2, backgroundColor: "red" }}>
            <Typography sx={{ textAlign: "left" }} variant="body1">
              {
                "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
              }
            </Typography>
          </Paper>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: imageFirst ? "right" : "left" }}
          >
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
      </ContentContainer>
    </FeaturedContainer>
  );
};

export default FeaturedCard;
