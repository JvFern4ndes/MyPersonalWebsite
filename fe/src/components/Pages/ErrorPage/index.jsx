import { useRouteError } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import GlobalStyles from '../../../assets/styles/global';
import DefaultTheme from '../../../assets/styles/themes/default';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Container>
    </ThemeProvider>
  );
}
