/* eslint-disable max-len */
import {
  Container, Content,
} from './styles';
import Button from '../../components/Button';
import ColorTexts from '../../components/ColorTexts';

export default function Home() {
  return (
    <Container id="home">
      <Content style={{ transitionDelay: '100' }}>
        <h1>Hi, my name is</h1>
      </Content>
      <Content style={{ transitionDelay: '200' }}>
        <h2>João Victor Fernandes.</h2>
      </Content>
      <Content style={{ transitionDelay: '300' }}>
        <h3>I develop things with javascript.</h3>
      </Content>
      <Content style={{ transitionDelay: '400' }}>
        <p>
          I am a<ColorTexts> multiplatform software developer</ColorTexts> with skills in building (and occasionally designing) engaging digital experiences using<ColorTexts> JavaScript</ColorTexts>. Currently, my focus lies in<ColorTexts> front-end web</ColorTexts> and{' '}<ColorTexts>mobile</ColorTexts> development, although I have and plan to further expand my knowledge in<ColorTexts> back-end</ColorTexts> development.
        </p>
      </Content>
      <Content style={{ transitionDelay: '500' }}>
        <Button style={{ marginTop: 32 }}>Get In Touch</Button>
      </Content>
    </Container>
  );
}
