import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

import Header from '../Header';

export const theme = {
  mediaQueries: {
    tablet: '@media screen and (max-width: 767px)',
  },
};

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
