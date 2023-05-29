import { Link } from 'react-router-dom';
import {
  Container,
  ProjectsList, Title,
  ProjectContainer,
  ProjectContent,
  Overline,
  ProjectTitle,
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
            </>
          </ProjectContent>
        </ProjectContainer>
      </ProjectsList>
    </Container>
  );
}
