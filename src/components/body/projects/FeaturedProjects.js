import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import FeaturedCard from "./ProjectCard/FeaturedCard";
import { FeaturedProjectData } from "../../data/FeaturedProjectData";

const CustomHeader = styled(Typography)`
  ::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -8px;
    width: 300px;
    height: 1px;
    margin-left: 10px;
    background-color: black;
    white-space: nowrap;
  }
`;

const projects = FeaturedProjectData;

const FeaturedProjects = () => {
  return (
    <div
      style={{ textAlign: "start", display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ width: 1000 }}>
        <CustomHeader color="primary" variant="h4">
          {"Some things I've Made"}
        </CustomHeader>
        <Stack sx={{ m: 5 }} spacing={5}>
          {projects.map((project, i) => {
            return (
              <FeaturedCard
                key={i}
                imageFirst={i % 2 === 0}
                projectInfo={project}
              ></FeaturedCard>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default FeaturedProjects;
