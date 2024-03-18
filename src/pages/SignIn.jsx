import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

const SignInContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const SignInForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    subject: "",
    teacherId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here, such as sending form data to your backend
    console.log("Sign-in form data:", formData);
    navigate("/login");
  };

  return (
    <SignInContainer component="main" maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <SignInForm onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="role"
          label="Teacher's Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="subject"
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="teacherId"
          label="Teacher ID"
          name="teacherId"
          value={formData.teacherId}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
      </SignInForm>
      <Box mt={2}>
        <Typography variant="body2">
          Already have an account?
          <Link to="/login" className="text-lg text-blue-700">
            Login
          </Link>
        </Typography>
      </Box>
    </SignInContainer>
  );
};

export default SignIn;
