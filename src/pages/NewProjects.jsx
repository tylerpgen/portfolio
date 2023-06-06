import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Fade, Link, Typography } from "@mui/material";
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

        {/* Map used for projectData being repeatedly used in the Project component  */}
        {projectData.map((project, i) => (
          <Box key={i}>
            <Project project={project} />
          </Box>
        ))}
        <Typography
          fontFamily="Titillium Web"
          textAlign="center"
          sx={{
            fontSize: "1.8rem",
            marginTop: "16px",
            marginBottom: "50px",
            [theme.breakpoints.up("lg")]: {
              fontSize: "2rem",
            },
          }}
        >
          All of my code, including more projects currently in development, is located on my
          <Link
            href="https://github.com/tylerpgen"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "underline", color: "black", cursor: "pointer" }}
          >
            {" "}
            Github
          </Link>{" "}
          page!
        </Typography>
      </Container>
    </Fade>
  );
};

export default NewProjects;
