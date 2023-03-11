import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomLink from "../../../common/CustomLink/CustomLink";
import "./jobcard.css";

const JobCard = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography display="inline" variant="h6">
          {"Developer Advocate"}
          <Typography display="inline" color="blue">
            {" @ "}
          </Typography>
          <CustomLink
            link="Link"
            text="TigerGraph"
            color="blue"
            underlineColor="blue"
            display="inline"
          ></CustomLink>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">
          {"May 2020"} {" - "} {"July 2020"}
        </Typography>
      </Grid>
      <Grid item>
        <ul>
          <li>
            Excited to start writing on Medium and aren’t sure of the details?
            Maybe you’ve already created a story or two and want to take your
            game to the next level. This guide is for YOU.
          </li>
          <li></li>
          <li></li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default JobCard;
