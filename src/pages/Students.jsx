import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Edit, Add, Delete } from "@mui/icons-material";
import { styled } from "@mui/system";
import studentsData from "../data/students.json";

// Styled components
const StyledTableContainer = styled(TableContainer)({
  margin: "11px auto",
  maxWidth: "90%",
  height: 500,
  overflowY: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 650,
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f3f3f3",
  },
});

const StyledButton = styled(Button)({
  marginTop: "14px",
});

const StyledDialogActions = styled(DialogActions)({
  display: "flex",
  justifyContent: "space-between",
});

const Students = () => {
  const [students, setStudents] = useState(studentsData);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newRollNumber, setNewRollNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState("");
  const [isPresent, setIsPresent] = useState(false);

  const handleViewProfile = (student) => {
    setEditName(student.name);
    setEditEmail(student.email);
    setOpenEditDialog(true);
  };

  const handleEditProfile = () => {
    setOpenEditDialog(false);
  };

  const handleDeleteStudent = (rollNumber) => {
    const updatedStudents = students.filter(
      (student) => student.rollNumber !== rollNumber
    );
    setStudents(updatedStudents);
    setOpenEditDialog(false);
  };

  const handleAddStudent = () => {
    const newStudent = {
      rollNumber: parseInt(newRollNumber),
      name: newName,
      email: newEmail,
      age: parseInt(newAge),
      branch: "Computer Science",
      semester: 8,
      isPresent: isPresent,
    };
    setStudents([...students, newStudent]);
    setOpenAddDialog(false);
  };

  return (
    <div>
      <Typography variant="h4">Students Table</Typography>
      <StyledTableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>Roll No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Is Present</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student.rollNumber}>
                <TableCell>{student.rollNumber}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.isPresent ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={() => handleViewProfile(student)}>
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteStudent(student.rollNumber)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>

      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => setOpenAddDialog(true)}
      >
        <Add /> Add Student
      </StyledButton>

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <StyledDialogActions>
          <Button onClick={handleEditProfile} color="primary">
            Save Changes
          </Button>
          <Button onClick={() => setOpenEditDialog(false)} color="secondary">
            Discard Changes
          </Button>
        </StyledDialogActions>
      </Dialog>

      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <TextField
            label="Roll Number"
            value={newRollNumber}
            onChange={(e) => setNewRollNumber(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Age"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Is Present"
            value={isPresent}
            onChange={(e) => setIsPresent(e.target.checked)}
            fullWidth
            margin="normal"
            type="checkbox"
          />
        </DialogContent>
        <StyledDialogActions>
          <Button onClick={handleAddStudent} color="primary">
            Add Student
          </Button>
          <Button onClick={() => setOpenAddDialog(false)} color="secondary">
            Cancel
          </Button>
        </StyledDialogActions>
      </Dialog>
    </div>
  );
};

export default Students;
