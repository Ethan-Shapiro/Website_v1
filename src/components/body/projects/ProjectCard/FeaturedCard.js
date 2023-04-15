import React from "react";
import { Grid, Stack, Typography, Box, Paper, IconButton } from "@mui/material";
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
          <Typography variant="h4" color="primary">
            {projectInfo.title}
          </Typography>
          <Paper elevation={10} sx={{ p: 2 }}>
            <Typography sx={{ textAlign: "left" }} variant="body1">
              {projectInfo.description}
            </Typography>
          </Paper>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: imageFirst ? "right" : "left" }}
          >
            {projectInfo.tags.map((tag) => {
              return <Typography variant="subtitle1">{tag}</Typography>;
            })}
          </Stack>
          <Stack
            sx={{ justifyContent: imageFirst ? "right" : "left" }}
            direction="row"
            spacing={2}
          >
            <IconButton>
              <GitHubIcon color="primary"></GitHubIcon>
            </IconButton>
            <IconButton>
              <LaunchIcon color="primary"></LaunchIcon>
            </IconButton>
          </Stack>
        </Stack>
      </ContentContainer>
    </FeaturedContainer>
  );
};

export default FeaturedCard;
