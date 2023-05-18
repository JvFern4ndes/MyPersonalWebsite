import { ThemeProvider } from 'styled-components';

import { Link, useRouteError } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import DefaultTheme from '../../assets/styles/themes/default';

import { Container, HomeButton } from './styles';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <HomeButton>Return</HomeButton>
        </Link>
      </Container>
    </ThemeProvider>
  );
}
