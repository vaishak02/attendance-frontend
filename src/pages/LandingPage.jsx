import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Attendance System
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Using Facial Recognition
      </Typography>
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/login"
          sx={{ marginRight: 2 }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/sign-in"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
