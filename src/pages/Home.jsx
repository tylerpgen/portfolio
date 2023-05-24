import React from "react";
import styled from "styled-components";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { Container, Fade, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const IconLink = styled.a`
  color: #000;

  &:visited {
    color: black;
  }

  @media screen and (min-width: 800px) {
    margin: 90px 100px;
  }
`;

const Home = () => {
  const theme = useTheme();
  return (
    <Fade in={true} timeout={2000}>
      <Container maxWidth="xl">
        <Container
          align="center"
          sx={{
            minHeight: "100vh",
            minWidth: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Titillium Web",
              fontWeight: "600",
              fontSize: "3rem",
              letterSpacing: ".22rem",
              [theme.breakpoints.up("lg")]: {
                fontSize: "8rem",
                letterSpacing: "1rem",
              },
            }}
          >
            TYLER GENER
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "1.5rem",
              fontStyle: "italic",
              marginTop: "40px",
              letterSpacing: "0.2rem",
            }}
          >
            Web Developer
          </Typography>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "170px",
              [theme.breakpoints.up("lg")]: {
                justifyContent: "center",
                marginTop: "75px",
              },
            }}
          >
            <IconLink href="https://github.com/tylerpgen" target="_blank" rel="noreferrer">
              <FaGithubAlt style={{ fontSize: 55 }} />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/tylergener13/" target="_blank" rel="noreferrer">
              <FaLinkedin style={{ fontSize: 55 }} />
            </IconLink>
          </Container>
        </Container>
        <Container align="center" maxWidth="md" sx={{ marginBottom: "100px" }}>
          <Paper elevation={4} sx={{ padding: "30px" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Titillium Web",
                fontSize: "2rem",
                fontWeight: "500",
                letterSpacing: "0.1rem",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "3rem",
                },
              }}
            >
              Contact Info:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Inter",
                fontSize: "1.1rem",
                fontWeight: "500",
                marginTop: "4px",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "1.4rem",
                },
              }}
            >
              Email: tylergen33@gmail.com <br /> Phone: By Request
            </Typography>
          </Paper>
        </Container>
      </Container>
    </Fade>
  );
};

export default Home;
