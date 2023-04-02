import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import JobCard from "./JobCard/JobCard";
import { JobData } from "../../data/JobData";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomHeader = styled(Typography)`
  ::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -8px;
    width: 300px;
    height: 1px;
    margin-left: 10px;
    background-color: white;
    white-space: nowrap;
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: 0, maxWidth: 700 }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const jobs = JobData;

const Experience = () => {
  const theme = useTheme();
  const biggerThanMD = useMediaQuery(theme.breakpoints.up("md"));
  const [currTab, setCurrTab] = React.useState(0);

  const handleChange = (event, newTabVal) => {
    setCurrTab(newTabVal);
  };

  return (
    <div
      style={{ textAlign: "start", display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ width: 1000, height: "100%", m: 10 }}>
        <CustomHeader variant="h4">{"Experience"}</CustomHeader>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: biggerThanMD ? "flex" : "block",
            minHeight: 370,
            height: "100%",
            m: 5,
          }}
        >
          <Tabs
            orientation={biggerThanMD ? "vertical" : "horizontal"}
            variant="scrollable"
            value={currTab}
            onChange={handleChange}
            aria-label="Experience Tabs"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              width: biggerThanMD ? 140 : "100%",
              height: "80%",
            }}
          >
            {jobs.map((job, index) => (
              <Tab label={job["company"]} {...a11yProps(index)} />
            ))}
          </Tabs>
          {jobs.map((job, index) => (
            <TabPanel value={currTab} index={index}>
              <JobCard key={job["id"]} {...job}></JobCard>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Experience;
