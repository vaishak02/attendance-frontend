import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

// Define a styled Card component with custom styles
const StyledCard = styled(Card)({
  maxWidth: 600,
  margin: "auto",
  marginTop: 20,
});

const Profile = () => {
  // Sample user data (replace with actual user data)
  const user = {
    name: "John Doe",
    role: "Associate Professor",
    subject: "Mathematics",
    teacherId: "12345",
    avatarUrl: "https://via.placeholder.com/150", // Sample avatar URL
  };

  const handleEditProfile = () => {
    // Add your edit profile logic here
    console.log("Edit profile clicked");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <StyledCard>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Avatar
                alt={user.name}
                src={user.avatarUrl}
                sx={{ width: 150, height: 150, margin: "auto" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Name: {user.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Role: {user.role}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Subject: {user.subject}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Teacher ID: {user.teacherId}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" onClick={handleEditProfile}>
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default Profile;
