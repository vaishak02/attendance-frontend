import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

const Profile = () => {
  const initialUserData = {
    name: "John Doe",
    role: "Associate Professor",
    subject: "Computer Science",
    teacherId: "123456",
    avatarUrl: "https://via.placeholder.com/150", // Placeholder avatar image
  };

  const [user, setUser] = useState(initialUserData);
  const [newUserData, setNewUserData] = useState({ ...initialUserData });
  const [isEditing, setIsEditing] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState("");

  const handleEditProfile = () => {
    setUser({ ...newUserData });
    setIsEditing(false);
    // Add logic to save data to backend or perform other actions
    console.log("User data updated:", newUserData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setNewUserData({ ...newUserData, avatarUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          alt={user.name}
          src={avatarPreview || user.avatarUrl}
          sx={{ width: 150, height: 150, mx: "auto", my: 2 }}
        />
        {isEditing && (
          <>
            <input
              type="file"
              accept="image/*"
              id="avatar-input"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="avatar-input">
              <Button variant="contained" component="span">
                Upload Image
              </Button>
            </label>
          </>
        )}
        <Typography variant="h4" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {user.role}
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={newUserData.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={newUserData.role}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={newUserData.subject}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Teacher ID"
            name="teacherId"
            value={newUserData.teacherId}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        {isEditing ? (
          <Button variant="contained" onClick={handleEditProfile}>
            Save Changes
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<Edit />}
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Profile;
