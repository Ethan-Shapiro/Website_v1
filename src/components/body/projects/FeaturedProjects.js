import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import FeaturedCard from "./ProjectCard/FeaturedCard";

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
const GridFirstParams = { rowStart: 1, colStart: 1, rowEnd: -1, colEnd: 7 };
const GridSecondParams = { rowStart: 1, colStart: 6, rowEnd: -1, colEnd: -1 };

const FeaturedProjects = () => {
  return (
    <div
      style={{ textAlign: "start", display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ width: 1000 }}>
        <CustomHeader variant="h4">{"Some things I've Made"}</CustomHeader>
        <FeaturedCard></FeaturedCard>
      </Box>
    </div>
  );
};

export default FeaturedProjects;
