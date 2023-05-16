import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import defaultTheme from '../../assets/styles/themes/default';
import Global from '../../assets/styles/global';
import Header from '../../components/Header';

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}
