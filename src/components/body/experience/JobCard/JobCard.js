import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomLink from "../../../common/CustomLink/CustomLink";
import "./jobcard.css";

const JobCard = ({ company, title, startDate, endDate, bullets, tags }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography display="inline" variant="h6">
          {company}
          <Typography display="inline" color="blue">
            {" @ "}
          </Typography>
          <CustomLink
            link="Link"
            text={title}
            color="blue"
            underlineColor="blue"
            display="inline"
          ></CustomLink>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">
          {startDate} {" - "} {endDate}
        </Typography>
      </Grid>
      <Grid item>
        <ul>
          {bullets.map((text) => (
            <li>
              <Typography variant="body1" sx={{ m: 0.5 }}>
                {text}
              </Typography>
            </li>
          ))}
        </ul>
      </Grid>
      {tags != null && (
        <Grid item>
          <Typography varient="subtitle2" sx={{ fontStyle: "italic" }}>
            {"Tags: " + tags.join(", ")}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default JobCard;
