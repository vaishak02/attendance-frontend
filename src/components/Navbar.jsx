import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { Button, Menu } from "@mui/material";

const navItems = [
  { text: "Home", route: "/home" },
  { text: "Students", route: "/home/students" },
  { text: "Attendance", route: "/home/attendance" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = localStorage.getItem("isAuth") === "true";
  const userName = localStorage.getItem("userName");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleAccountMenu = () => {
    setAccountMenuOpen(!accountMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/sign-in");
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                    <Button component={RouterLink} to="/home/profile">
                      Profile
                    </Button>
                    <Button onClick={handleLogout}>Logout</Button>
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
}
