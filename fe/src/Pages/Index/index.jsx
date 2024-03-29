import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import Global from '../../assets/styles/global';

import Header from '../../components/Header';
import Home from '../Home';
import About from '../About';
import SocialStyledSideElement from '../../components/SocialStyledSideElement';
import EmailStyledSideElement from '../../components/EmailStyledSideElement';
import { Container, Content, Pages } from './styles';
import Skills from '../Skills';
import Contact from '../Contact';
import Portfolio from '../Portfolio';

export default function Index() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Container>
        <Header />
        <SocialStyledSideElement />
        <EmailStyledSideElement />
        <Content>
          <Pages>
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </Pages>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
