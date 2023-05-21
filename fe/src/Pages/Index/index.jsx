import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import Global from '../../assets/styles/global';

import Header from '../../components/Header';
import Start from '../Start';
import About from '../About';
import SocialStyledSideElement from '../../components/SocialStyledSideElement';
import EmailStyledSideElement from '../../components/EmailStyledSideElement';
import { Content, Pages } from './styles';

export default function Index() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Header />
      <SocialStyledSideElement />
      <EmailStyledSideElement />
      <Content>
        <Pages>
          <Start />
          <About />
        </Pages>
      </Content>
    </ThemeProvider>
  );
}
