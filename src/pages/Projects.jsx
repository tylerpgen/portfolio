import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import LnLogo from "../assets/ln.png";

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
`;

const Header = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 3.2rem;
  text-decoration: underline;
  letter-spacing: 5px;
  color: #000;
  margin-top: 20px;
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
`;

const Projects = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>Work</Header>
        <DescContainer>
          <Desc>
            Projects I have created on my journey to becoming a web developer
          </Desc>
        </DescContainer>
      </HeaderContainer>
      <ProjectCard img={LnLogo} />
      <ProjectCard img={LnLogo} />
    </Container>
  );
};

export default Projects;
