import { Link } from 'react-router-dom';

import GithubIcon from '../../assets/images/GithubIcon.svg';
import ProjectLink from '../../assets/images/ProjectLink.svg';
import MyPortfolioImage from '../../assets/images/MyPortfolioImage.jpg';

import {
  Container,
  ProjectsList, Title,
  ProjectContainer,
  ProjectContent,
  Content,
  Overline,
  ProjectTitle,
  ProjectDescription,
  ProjectTechList,
  TechOfList,
  ProjectLinks,
  Picture,
  Wrapper,
  ImageWrapper,
  ImageContainer,
  Overlay,
} from './styles';

export default function Portfolio() {
  return (
    <Container id="portfolio">
      <Title>Some Things I&apos;ve Built</Title>
      <ProjectsList>
        <ProjectContainer>
          <Picture>
            <Wrapper>
              <ImageWrapper>
                <ImageContainer>
                  <Link to="/#">
                    <img src={MyPortfolioImage} alt="Me" />
                    <Overlay />
                  </Link>
                </ImageContainer>
              </ImageWrapper>
            </Wrapper>
          </Picture>
          <ProjectContent>
            <Content>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>My Own Portfolio</ProjectTitle>
              </Link>
              <ProjectDescription>
                <p>Development of my personal portfolio through javascript and ReactJs.</p>
              </ProjectDescription>
              <ProjectTechList>
                <TechOfList>React</TechOfList>
                <TechOfList>Javascript</TechOfList>
                <TechOfList>CSS</TechOfList>
                <TechOfList>HTML</TechOfList>
              </ProjectTechList>
              <ProjectLinks>
                <Link to="/#">
                  <img src={GithubIcon} alt="Github Link" />
                </Link>
                <Link to="/#">
                  <img src={ProjectLink} alt="Project Link" />
                </Link>
              </ProjectLinks>
            </Content>
          </ProjectContent>
        </ProjectContainer>
      </ProjectsList>
    </Container>
  );
}
