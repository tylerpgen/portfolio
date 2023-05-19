import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Fade, Typography } from "@mui/material";
import Project from "../components/Project";
import { projectData } from "../data/projects";

const NewProjects = () => {
  const theme = useTheme();

  return (
    <Fade in={true} timeout={1000}>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Typography
          variant="h1"
          fontFamily="Titillium Web"
          textAlign="center"
          sx={{
            textDecoration: "underline",
            fontSize: "3.2rem",
            marginTop: "16px",
            [theme.breakpoints.up("lg")]: {
              fontSize: "4rem",
            },
          }}
        >
          Projects
        </Typography>
        {projectData.map((project, i) => (
          <Box key={i}>
            <Project project={project} />
          </Box>
        ))}
      </Container>
    </Fade>
  );
};

export default NewProjects;
