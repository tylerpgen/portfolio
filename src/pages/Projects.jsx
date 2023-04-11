import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import LnLogo from "../assets/ln.png";
import YeLogo from "../assets/ye.png";
import ToDo from "../assets/todo.png";
import Shoe from "../assets/shoe.png";
import Flash from "../assets/flash.png";
import Type from "../assets/typing.png";
import Movie from "../assets/movie.png";
import { Fade } from "@mui/material";
const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
  padding: 10px 0;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    margin: 20px 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 780px) {
    margin-top: 70px;
  }
`;

const Header = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 3.2rem;
  text-decoration: underline;
  letter-spacing: 5px;
  color: #000;

  @media screen and (min-width: 780px) {
    font-size: 5rem;
  }
`;

const DescContainer = styled.div`
  margin: 10px;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  line-height: 1.5;
`;
const Desc = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;

  @media screen and (min-width: 780px) {
    margin-top: 20px;
    font-size: 1.8rem;
  }
`;

const Projects = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Container>
        <HeaderContainer>
          <Header>Work</Header>
          <DescContainer>
            <Desc>
              Projects I have created on my journey to becoming a web developer ! <br />
              <br />
              These projects have all been made using HTML, CSS, Javascript, and ReactJS.
            </Desc>
          </DescContainer>
        </HeaderContainer>
        <ProjectContainer>
          <ProjectCard title="Personal Trainer" link="https://ln-training.com/" img={LnLogo} />
          <ProjectCard link="https://tylerpgen.github.io/kanye-site/" img={YeLogo} />
          <ProjectCard link="https://tylerpgen.github.io/to-do-list/" img={ToDo} />
          <ProjectCard link="https://game-3ffe5.web.app/" img={Shoe} />
          <ProjectCard link="https://tylerpgen.github.io/flashcard-app/" img={Flash} />
          <ProjectCard link="https://tylerpgen.github.io/tyler-type/" img={Type} />
          <ProjectCard link="https://tylerpgen.github.io/movie-theatre/" img={Movie} />
        </ProjectContainer>
      </Container>
    </Fade>
  );
};

export default Projects;
