import React from "react";
import { Grid, Typography } from "@mui/material";
import JobCard from "./JobCard/JobCard";
import { JobData } from "../../data/JobData";

const Experience = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <Typography variant="h3">{"Experience"}</Typography>
      <JobCard></JobCard>
    </div>
  );
};

export default Experience;
