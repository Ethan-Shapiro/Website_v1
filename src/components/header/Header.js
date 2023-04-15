import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import CustomLink from "../common/CustomLink/CustomLink";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "#0a192f" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            color="primary"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            Ethan Shapiro
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Helvetica Neue",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Ethan Shapiro
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Grid direction="row" container columnSpacing={0.25}>
                  <Grid item alignSelf={"center"}>
                    <WorkHistoryOutlinedIcon color="primary"></WorkHistoryOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <CustomLink
                      text={"Experience"}
                      link={"#experience"}
                    ></CustomLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid direction="row" container columnSpacing={0.25}>
                  <Grid item alignSelf={"center"}>
                    <FolderOpenIcon color="primary"></FolderOpenIcon>
                  </Grid>
                  <Grid item>
                    <CustomLink
                      text={"Projects"}
                      link={"#projects"}
                      color="white"
                    ></CustomLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid direction="row" container columnSpacing={0.25}>
                  <Grid item alignSelf={"center"}>
                    <BuildCircleOutlinedIcon color="primary"></BuildCircleOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <CustomLink text={"Skills"} link={"#skills"}></CustomLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid direction="row" container columnSpacing={0.25}>
                  <Grid item alignSelf={"center"}>
                    <AccountCircleIcon color="primary"></AccountCircleIcon>
                  </Grid>
                  <Grid item>
                    <CustomLink text={"Contact"} link={"#contact"}></CustomLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="contained" color="error" sx={{ m: 0.5 }}>
                  Resume
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
