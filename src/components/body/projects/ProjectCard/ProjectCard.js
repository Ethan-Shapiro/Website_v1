import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions, CardHeader } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({ projectInfo }) => {
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Card
        className="projectCard"
        sx={{
          maxWidth: 350,
          height: "100%",
          minHeight: "350px",
          transition: "transform ease 300ms",
          "&:hover": {
            transform: "translate(0, -10px)",
            "& .projectTitle": {
              color: "#64ffdb",
            },
          },
        }}
      >
        <CardHeader
          sx={{ height: "18%" }}
          avatar={<FolderOpenIcon fontSize="large" />}
          action={
            <>
              <IconButton aria-label="Github">
                <GitHubIcon fontSize="medium" />
              </IconButton>
              <IconButton aria-label="Link">
                <LaunchIcon fontSize="medium" />
              </IconButton>
            </>
          }
        />
        <CardContent
          sx={{
            height: "65%",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="projectTitle"
          >
            {projectInfo.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {projectInfo.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ justifyContent: "center", height: "17%" }}
          className={"projectTags"}
        >
          {projectInfo.tags.map((tag, i) => {
            return (
              <Typography key={i} variant="subtitle2">
                {tag}
              </Typography>
            );
          })}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectCard;
