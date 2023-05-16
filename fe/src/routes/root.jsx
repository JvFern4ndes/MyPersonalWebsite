import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';

import { Container } from '../components/App/styles';

import Header from '../components/Header';

export default function Root() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}
