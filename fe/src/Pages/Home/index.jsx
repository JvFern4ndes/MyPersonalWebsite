/* eslint-disable max-len */
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import {
  Container, Content, FirstText, Name, SecondText, ThirdText,
} from './styles';
import Header from '../../components/Header';

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
          <ThirdText>I am a multiplatform software developer with skills in building (and occasionally designing) engaging digital experiences using JavaScript. Currently, my focus lies in front-end web and mobile development, although I have and plan to further expand my knowledge in back-end development.</ThirdText>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
