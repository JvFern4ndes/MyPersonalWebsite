/* eslint-disable max-len */
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import {
  Container, Content, FirstText, Name, SecondText, ThirdText, ColorTexts,
} from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Content>
          <FirstText>Hi, my name is</FirstText>
          <Name>João Victor Fernandes.</Name>
          <SecondText>I develop things with javascript.</SecondText>
          <ThirdText>
            I am a
            {' '}
            <ColorTexts>multiplatform software developer</ColorTexts>
            {' '}
            with skills in building (and occasionally designing) engaging digital experiences using
            {' '}
            <ColorTexts>JavaScript</ColorTexts>
            . Currently, my focus lies in
            {' '}
            <ColorTexts>front-end web</ColorTexts>
            {' '}
            and
            {' '}
            <ColorTexts>mobile</ColorTexts>
            {' '}
            development, although I have and plan to further expand my knowledge in
            {' '}
            <ColorTexts>back-end</ColorTexts>
            {' '}
            development.
          </ThirdText>
          <Button>Get In Touch</Button>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
