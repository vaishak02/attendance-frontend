import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton, // Import ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

const navItems = [
  { text: "Home", route: "/home" },
  { text: "Students", route: "/home/students" },
  { text: "Attendance", route: "/home/attendance" },
];

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = localStorage.getItem("isAuth") === "true";
  const userName = localStorage.getItem("userName");

  const toggleAccountMenu = () => {
    setAccountMenuOpen(!accountMenuOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleAttendanceSystemClick = () => {
    if (!isAuth) {
      navigate("/");
    }
  };

  const drawerWidth = 240;

  const drawer = (
    <Box
      onClick={toggleDrawer}
      sx={{ textAlign: "center", width: drawerWidth }}
      role="presentation"
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Attendance System
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            component={RouterLink}
            to={item.route}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={handleAttendanceSystemClick}
          >
            Attendance System
          </Typography>
          {location.pathname === "/login" ? (
            <Button color="inherit" onClick={handleSignIn}>
              Sign In
            </Button>
          ) : (
            <>
              {isAuth && (
                <>
                  <Typography variant="body1" sx={{ mr: 2 }}>
                    Welcome, {userName}
                  </Typography>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={toggleAccountMenu}
                    sx={{ ml: 2 }}
                  >
                    <AccountCircle />
                  </IconButton>
                </>
              )}
              {isAuth && (
                <Menu
                  anchorEl={null}
                  open={accountMenuOpen}
                  onClose={toggleAccountMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 2,
                    }}
                  >
                    <MenuItem component={RouterLink} to="/home/profile">
                      {" "}
                      {/* Change MenuItem */}
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Box>
                </Menu>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      {isAuth && (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
};

export default Navbar;
