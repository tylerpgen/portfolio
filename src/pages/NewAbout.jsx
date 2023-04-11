import { useTheme } from "@emotion/react";
import { Typography, Box, Fade, Paper } from "@mui/material";
import { styled } from "@mui/system";

import Portrait from "../assets/tyler.jpg";

const NewAbout = () => {
  const theme = useTheme();

  const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {},
    minHeight: "100vh",
    minWidth: "100%",
  });

  const PortraitPic = styled("img")(({ theme }) => ({
    alignItems: "center",
    width: "70%",
    margin: "20px auto",
    borderRadius: "80%",
    [theme.breakpoints.up("lg")]: {
      width: "25%",
    },
  }));

  return (
    <Fade in={true} timeout={1000}>
      <Box>
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
          ABOUT
        </Typography>
        <StyledBox>
          <PortraitPic src={Portrait}></PortraitPic>
          <Box
            sx={{
              width: "100%",
              px: 1,
              mb: "25px",
              [theme.breakpoints.up("lg")]: {
                maxWidth: "700px",
              },
              [theme.breakpoints.only("xl")]: {
                maxWidth: "1050px",
              },
            }}
          >
            <Paper elevation={5} sx={{ p: 2, margin: "0 8px", backgroundColor: "#FFF" }}>
              <Typography
                variant="body1"
                fontFamily="Inter"
                sx={{
                  mt: "8px",
                  textIndent: "1.5em",
                  color: "#000",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "1.25rem",
                  },
                }}
              >
                Hello there! So, let me tell you a bit about myself and my adventures in the world of web development.
                My name is Tyler Gener, and I am a web developer extraordinaire with a penchant for creating immersive
                and user-friendly web experiences. I recently graduated from UC Santa Barbara with a Bachelor of Science
                in Psychology and Brain Sciences, and ever since then, I've been on a wild and exciting journey to
                master the art of web development.
              </Typography>
              <Typography
                variant="body1"
                fontFamily="Inter"
                sx={{
                  mt: "8px",
                  textIndent: "1.5em",
                  color: "#000",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "1.25rem",
                  },
                }}
              >
                I've gainied proficiency in HTML, CSS, JavaScript, React, and other web technologies through my
                unwavering dedication to learning and plenty of hands-on experience. I'm always on my toes, keeping up
                with the latest trends and techniques in web development as I believe in the importance of continuous
                learning in this dynamic field. From coding fundamentals to tackling complex frameworks, I've loved
                every step of the learning process, and I am itching to put my skills to work in creating innovative
                websites that deliver amazing user experiences.
              </Typography>
              <Typography
                variant="body1"
                fontFamily="Inter"
                sx={{
                  mt: "8px",
                  textIndent: "1.5em",
                  color: "#000",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "1.25rem",
                  },
                }}
              >
                I am thrilled to continue my journey as a web developer, and I look forward to creating innovative and
                impactful web experiences. Thank you for taking the time to get to know me better, and I am excited to
                explore opportunities in any developer position to contribute my skills and passion to exciting
                projects.
              </Typography>
            </Paper>
          </Box>
        </StyledBox>
      </Box>
    </Fade>
  );
};

export default NewAbout;
