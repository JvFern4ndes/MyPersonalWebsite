/* eslint-disable max-len */
import ColorTexts from '../../components/ColorTexts';
// import MyPhoto from '../../assets/images/MyPhoto.png';
import {
  Container,
  TextAndImage,
  AboutTexts,
  Text,
  SkillsList,
  Picture,
  Wrapper,
} from './styles';

export default function About() {
  return (
    <Container id="about">
      <h2>About Me</h2>
      <TextAndImage>
        <AboutTexts>
          <Text>
            <p>
              Hello, my name is João Victor and I like to create things on the internet. My first contact with web development was around 2015, when I decided to try to create a website with a collection of all Iron Maiden albums and songs after watching some HTML and CSS classes on YouTube. However, for various reasons, I unfortunately ended up putting all that aside to become a chemist (if regret could kill...).
            </p>
            <p>
              A few years have passed and by the end of 2021, I regained my interest in web development, and today I have no doubts that this is what I want to do for the rest of my life. Currently, I am graduating as a Multiplatform Software Developer from the <ColorTexts><a href="https://www.cps.sp.gov.br/fatecs/fatec-maua/">Faculty of Technology in Mauá</a></ColorTexts>, and I am always striving to improve my skills in the tools I use.
            </p>
            <p>
              Here are a few technologies i&apos;ve been working with recently:
            </p>
          </Text>
          <SkillsList>
            <li>Javascript (ES6+)</li>
            <li>React</li>
            <li>React Native</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>WordPress</li>
          </SkillsList>
        </AboutTexts>
        <Picture>
          <Wrapper />
        </Picture>
      </TextAndImage>
    </Container>
  );
}
