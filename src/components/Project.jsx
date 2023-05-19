import React from "react";
import { Container, Link, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const StyledImage = styled("img")(({ theme }) => ({
  display: "block",
  alignItems: "center",
  width: "100%",
  margin: "20px auto",
  boxShadow: "0 4px 5px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.up("lg")]: {
    width: "50%",
    minHeight: "300px",
  },
}));

const Project = ({ project }) => {
  const theme = useTheme();

  const { name, desc, image, link } = project;

  return (
    <Container maxWidth="lg" sx={{ marginBottom: "50px", marginTop: "50px" }}>
      <Paper elevation={5} sx={{ p: 2, margin: "0", backgroundColor: "#FFF" }}>
        <Typography
          align="center"
          variant="h3"
          fontFamily="Titillium Web"
          sx={{
            fontSize: "2rem",
            marginTop: "3px",
            [theme.breakpoints.up("lg")]: {
              fontSize: "3rem",
            },
          }}
        >
          {name}
        </Typography>

        <Link href={link} target="_blank" rel="noopener noreferrer">
          <StyledImage src={image} alt={name} />
        </Link>

        <Typography
          variant="body1"
          fontFamily="Inter"
          sx={{
            mt: "8px",
            color: "#000",
            [theme.breakpoints.up("lg")]: {
              fontSize: "1.25rem",
            },
          }}
        >
          {desc}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Project;
