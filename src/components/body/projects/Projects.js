import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ProjectData } from "../../data/ProjectData";

const projectData = ProjectData;

const Projects = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: 1000 }}>
        <Typography variant="h4">{"Other Noteworthy Projects"}</Typography>
        <Grid container sx={{ m: 0 }} spacing={1}>
          {projectData.map((pData, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <ProjectCard projectInfo={pData}></ProjectCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
