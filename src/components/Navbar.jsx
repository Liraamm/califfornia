import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

import NavbarCaliffornia from "../assets/NavbarIcon.svg";
import Basket from "../assets/Basket.svg";
import PinkSearch from "../assets/Search.svg";
import { Link, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box
      className="Navbar-main"
      // style={{
      //   flexGrow: 1,
      //   fontFamily: '"Comfortaa", cursive',
      // width: "100%",
      // }}
      sx={{
        fontFamily: "Comfortaa, cursive",
        // width: "100%",
        margin: "0 auto",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Button
            variant="outlined"
            disableElevation
            sx={{
              width: "17%",
              borderRadius: "20px",
              backgroundColor: "#6A205E",
              fontFamily: '"Comfortaa", cursive',
              fontSize: "130%",
              textTransform: "capitalize",
              marginLeft: "13%",
              color: "#ffff",
            }}
            className="Catalog"
            component={Link}
            to="/catalog"
          >
            Каталог
          </Button>
          <Typography
            className="Logo-navbar"
            variant="h6"
            noWrap
            // component="div"
            sx={{
              flexGrow: 0.7,
              display: { xs: "none", sm: "block" },
            }}
            component={Link}
            to="/"
          >
            <img src={NavbarCaliffornia} alt="Navbar Icon" width={120} />
          </Typography>
          <Button
            variant="outlined"
            disableElevation
            sx={{
              width: "17%",
              borderRadius: "20px",
              backgroundColor: "#ffff",
              border: "3px solid #6A205E",
              color: "#6A205E",
              fontFamily: '"Comfortaa", cursive',
              fontSize: "130%",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
            className="Contacts"
          >
            Контакты
          </Button>
          <img
            src={PinkSearch}
            alt="PinkSearch"
            width={40}
            style={{ marginLeft: "1%" }}
            onClick={() => navigate("/catalog")}
          />
          <img
            src={Basket}
            alt="Basket"
            width={40}
            style={{ marginLeft: "1%" }}
            onClick={() => navigate("/cart")}
          />
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
