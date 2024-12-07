import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import "../styles/Courses.css";

const coursesData = [
  {
    id: 1,
    title: "Introduction to Programming",
    instructor: "Dr. John Doe",
    schedule: "Mon & Wed - 10:00 AM to 11:30 AM",
    materials: [
      { id: 101, title: "Lecture 1 Slides", link: "/materials/programming-lecture1.pdf" },
      { id: 102, title: "Assignment 1", link: "/materials/programming-assignment1.pdf" },
    ],
  },
  {
    id: 2,
    title: "Data Structures",
    instructor: "Prof. Jane Smith",
    schedule: "Tue & Thu - 2:00 PM to 3:30 PM",
    materials: [
      { id: 201, title: "Lecture Notes", link: "/materials/ds-lecture-notes.pdf" },
      { id: 202, title: "Exercise Problems", link: "/materials/ds-exercise.pdf" },
    ],
  },
];

const Courses = () => {
  return (
    <Box className="courses-container" sx={{ p: 4 }}>
      <Typography variant="h4" className="courses-title" gutterBottom>
        Courses
      </Typography>
      <Typography variant="body1" className="courses-description" gutterBottom>
        Browse available courses and enroll.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {coursesData.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card className="course-card" sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  className="course-title"
                  color="primary"
                  gutterBottom
                >
                  {course.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="course-instructor"
                  gutterBottom
                >
                  <strong>Instructor:</strong> {course.instructor}
                </Typography>
                <Typography
                  variant="body2"
                  className="course-schedule"
                  gutterBottom
                >
                  <strong>Schedule:</strong> {course.schedule}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="materials-header"
                  gutterBottom
                >
                  Materials:
                </Typography>
                <ul className="materials-list">
                  {course.materials.map((material) => (
                    <li key={material.id} className="material-item">
                      <Button
                        className="material-link"
                        href={material.link}
                        target="_blank"
                        color="secondary"
                      >
                        {material.title}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  className="view-more-btn"
                >
                  View More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box className="action-buttons" sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          className="courses-button"
          sx={{ mx: 2 }}
        >
          View Courses
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className="courses-button"
          sx={{ mx: 2 }}
        >
          Enroll Now
        </Button>
      </Box>
    </Box>
  );
};

export default Courses;
