import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import "../styles/StudentClubs.css";

const availableClubs = [
  {
    id: 1,
    name: "Mayavi Club",
    description:
      "Mayavi is a Technology club of K L University where students collaborate to work on Augmented Reality, Virtual Reality, Game development, Mixed Reality.",
    aboutLink: "https://www.instagram.com/klef.mayavi/",
  },
  {
    id: 2,
    name: "Narthana Club",
    description:
      "Narthana, dance club of K LUSO, is a platform that imbibes the intricate movements of classical dance with the narrative theatrical elements of drama.",
    aboutLink: "https://www.instagram.com/kl_narthana_danceclub/",
  },
  {
    id: 3,
    name: "SAC Club",
    description:
      "A vibrant and inclusive hub where students explore, innovate, and excel beyond academics, fostering holistic development across cultural, sports.",
    aboutLink: "https://www.instagram.com/klu_sac/",
  },
  {
    id: 4,
    name: "GDSC Club",
    description:
      "Google Developer Student Club Leads are passionate leaders at their universities who are dedicated to helping their peers learn and connect.",
    aboutLink: "https://www.instagram.com/gdg_klef/",
  },
  {
    id: 5,
    name: "S W A R A Club",
    description:
      "\uD835\uDDE0 \uD835\uDDE6 \uD835\uDDF9 \uD835\uDDE0 \uD835\uDDF0 Musician/band @raaga_klef - KL University's Official Music Club : We jam, perform and create!",
    aboutLink: "https://www.instagram.com/swara_klef/",
  },
  {
    id: 6,
    name: "KL-GLUG Club",
    description:
      "A Free and Open source Technology and knowledge Commons group for KL University Students which runs under @swechaap",
    aboutLink: "https://www.instagram.com/kluglug/",
  },
];

const mockActivities = {
  "Mayavi Club": [
    { date: "2024-12-05", activity: "AR/VR Workshop" },
    { date: "2024-12-15", activity: "Game Development Hackathon" },
  ],
  "Narthana Club": [
    { date: "2024-12-10", activity: "Classical Dance Workshop" },
    { date: "2024-12-20", activity: "Annual Dance Performance" },
  ],
  "SAC Club": [
    { date: "2024-12-12", activity: "Cultural Fest Preparation" },
    { date: "2024-12-22", activity: "Sports Meet" },
  ],
  "GDSC Club": [
    { date: "2024-12-08", activity: "Introduction to Cloud Computing" },
    { date: "2024-12-18", activity: "Hackathon on Machine Learning" },
  ],
  "S W A R A Club": [
    { date: "2024-12-07", activity: "Open Mic Night" },
    { date: "2024-12-17", activity: "Music Jam Session" },
  ],
  "KL-GLUG Club": [
    { date: "2024-12-09", activity: "Open Source Contribution Sprint" },
    { date: "2024-12-19", activity: "Linux Fundamentals Workshop" },
  ],
};

const StudentClubs = () => {
  const [joinedClubs, setJoinedClubs] = useState([]);

  const handleJoinClub = (club) => {
    if (!joinedClubs.includes(club)) {
      setJoinedClubs([...joinedClubs, club]);
    }
  };

  const handleLeaveClub = (club) => {
    setJoinedClubs(joinedClubs.filter((c) => c !== club));
  };

  const handleAboutUs = (aboutLink) => {
    window.open(aboutLink, "_blank");
  };

  return (
    <Box
      className="student-clubs"
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Student Club Activities
      </Typography>

      <Typography variant="h5" gutterBottom>
        Available Clubs
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "80%",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {availableClubs.map((club) => (
          <Grid item xs={12} sm={6} key={club.id}>
            <Card
              className="club-card"
              sx={{
                height: "260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h6" color="primary">
                  {club.name}
                </Typography>
                <Typography>{club.description}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-around", gap: "8px" }}>
                {joinedClubs.includes(club.name) ? (
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleLeaveClub(club.name)}
                    sx={{ backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}
                  >
                    Leave Club
                  </Button>
                ) : (
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleJoinClub(club.name)}
                    sx={{ backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}
                  >
                    Join Club
                  </Button>
                )}
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => handleAboutUs(club.aboutLink)}
                  sx={{ backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}
                >
                  About Us
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {joinedClubs.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Upcoming Activities for Joined Clubs
          </Typography>
          {joinedClubs.map((club) => (
            <Box key={club} className="club-activity-box" sx={{ mb: 3 }}>
              <Typography variant="h6" color="primary">
                {club}
              </Typography>
              <List>
                {mockActivities[club].map((activity, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={`Date: ${activity.date}`}
                        secondary={`Activity: ${activity.activity}`}
                      />
                    </ListItem>
                    {index < mockActivities[club].length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default StudentClubs;
