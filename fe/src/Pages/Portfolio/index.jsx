import { Link } from 'react-router-dom';
import {
  Container,
  ProjectsList, Title,
  ProjectContainer,
  ProjectContent,
  Overline,
  ProjectTitle,
  ProjectDescription,
  ProjectTechList,
  TechOfList,
} from './styles';

export default function Portfolio() {
  return (
    <Container id="portfolio">
      <Title>Some Things I&apos;ve Built</Title>
      <ProjectsList>
        <ProjectContainer>
          <ProjectContent>
            <>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>Project 1</ProjectTitle>
              </Link>
              <ProjectDescription>
                <p>Realização do projeto 1</p>
              </ProjectDescription>
              <ProjectTechList>
                <TechOfList>React</TechOfList>
                <TechOfList>Javascript</TechOfList>
                <TechOfList>CSS</TechOfList>
                <TechOfList>HTML</TechOfList>
              </ProjectTechList>
            </>
          </ProjectContent>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectContent>
            <>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>Project 2</ProjectTitle>
              </Link>
              <ProjectDescription>
                <p>Realização do projeto 2</p>
              </ProjectDescription>
              <ProjectTechList>
                <TechOfList>React</TechOfList>
                <TechOfList>Javascript</TechOfList>
                <TechOfList>CSS</TechOfList>
                <TechOfList>HTML</TechOfList>
              </ProjectTechList>
            </>
          </ProjectContent>
        </ProjectContainer>
      </ProjectsList>
    </Container>
  );
}
