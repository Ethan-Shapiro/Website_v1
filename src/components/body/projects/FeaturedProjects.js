import React from "react";
import { Stack, Typography, Box } from "@mui/material";
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

const FeaturedProjects = () => {
  return (
    <div
      style={{ textAlign: "start", display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ width: 1000 }}>
        <CustomHeader variant="h4">{"Some things I've Made"}</CustomHeader>
        <Stack sx={{ m: 5 }} spacing={5}>
          <FeaturedCard imageFirst={true}></FeaturedCard>
          <FeaturedCard imageFirst={false}></FeaturedCard>
          <FeaturedCard imageFirst={true}></FeaturedCard>
        </Stack>
      </Box>
    </div>
  );
};

export default FeaturedProjects;
