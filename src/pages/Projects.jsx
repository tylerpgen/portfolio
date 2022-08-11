import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import LnLogo from "../assets/ln.png";
import YeLogo from "../assets/ye.png";
import ToDo from "../assets/todo.png";
import Shoe from "../assets/shoe.png";
import { ProjectContainer } from "../styles/ProjectCard.style";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  -webkit-animation-delay: 0.7s;
  -moz-animation-delay: 0.7s;
  animation-delay: 0.7s;
  -webkit-animation: fadeIn 1s ease-in 0s 1 normal forwards; /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
  -moz-animation: fadeIn 1s ease-in 0s 1 normal forwards;
  animation: fadeIn 1s ease-in 0s 1 normal forwards;

  @media screen and (max-width: 780px) {
    height: auto;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
    <Container>
      <HeaderContainer>
        <Header>Work</Header>
        <DescContainer>
          <Desc>
            Projects I have created on my journey to becoming a web developer !
          </Desc>
        </DescContainer>
      </HeaderContainer>
      <ProjectContainer>
        <ProjectCard link="https://ln-training.com/" img={LnLogo} />
        <ProjectCard
          link="https://tylerpgen.github.io/kanye-site/"
          img={YeLogo}
        />
        <ProjectCard
          link="https://tylerpgen.github.io/to-do-list/"
          img={ToDo}
        />
        <ProjectCard link="https://game-3ffe5.web.app/" img={Shoe} />
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
