/* eslint-disable max-len */
import ColorSourceCodeProTexts from '../../components/ColorSourceCodeProTexts';
import {
  Container, Content, Text, Title,
} from './styles';

export default function About() {
  return (
    <Container>
      <Content>
        <Title>
          <ColorSourceCodeProTexts>01.</ColorSourceCodeProTexts>
          {' '}
          About Me
        </Title>
        <Text>
          Hello, my name is João Victor and I like to create things on the internet. My first contact with web development was around 2015, when I decided to try to create a website with a collection of all Iron Maiden albums and songs after watching some HTML and CSS classes on YouTube. However, for various reasons, I unfortunately ended up putting all that aside to become a chemist (if regret could kill...).
        </Text>
        <Text>
          A few years have passed and by the end of 2021, I regained my interest in web development, and today I have no doubts that this is what I want to do for the rest of my life. Currently, I am graduating as a Cross-Platform Software Developer from the Faculty of Technology in Mauá, and I am always striving to improve my skills in the tools I use.
        </Text>
        <Text>
          Here are a few technologies i&apos;ve been working with recently:
        </Text>
      </Content>
    </Container>
  );
}
