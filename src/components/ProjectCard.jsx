import {
  Container,
  ImageLink,
  ProjectContainer,
  ProjectImage,
} from "../styles/ProjectCard.style";

const Projects = (props) => {
  return (
    <Container>
      <ProjectContainer>
        <ImageLink href={props.link} target="_blank" rel="noopener noreferrer">
          <ProjectImage src={props.img} />
        </ImageLink>
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
