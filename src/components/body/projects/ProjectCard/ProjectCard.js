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

const ProjectCard = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Card
        className="projectCard"
        sx={{
          maxWidth: 345,
          transition: "transform ease 300ms",
          "&:hover": {
            transform: "translate(0, -10px)",
            "& .projectTitle": {
              color: "purple",
            },
          },
        }}
      >
        <CardHeader
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
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="projectTitle"
          >
            League of Legends Win Prediction
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions
          sx={{ justifyContent: "center" }}
          className={"projectTags"}
        >
          <Typography variant="body2">React</Typography>
          <Typography variant="body2">Styled Components</Typography>
          <Typography variant="body2">Firebase</Typography>
          <Typography variant="body2">CI/CD</Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectCard;
