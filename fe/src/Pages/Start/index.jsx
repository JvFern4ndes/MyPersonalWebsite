/* eslint-disable max-len */
import {
  Container, Content, FirstText, Name, SecondText, ThirdText,
} from './styles';
import Button from '../../components/Button';
import ColorTexts from '../../components/ColorTexts';

export default function Home() {
  return (
    <Container>
      <Content>
        <FirstText>Hi, my name is</FirstText>
        <Name>João Victor Fernandes.</Name>
        <SecondText>I develop things with javascript.</SecondText>
        <ThirdText>
          I am a<ColorTexts> multiplatform software developer</ColorTexts> with skills in building (and occasionally designing) engaging digital experiences using<ColorTexts> JavaScript</ColorTexts>. Currently, my focus lies in<ColorTexts> front-end web</ColorTexts> and{' '}<ColorTexts>mobile</ColorTexts> development, although I have and plan to further expand my knowledge in<ColorTexts> back-end</ColorTexts> development.
        </ThirdText>
        <Button>Get In Touch</Button>
      </Content>
    </Container>
  );
}
