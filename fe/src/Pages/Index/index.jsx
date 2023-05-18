import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import Global from '../../assets/styles/global';

import Header from '../../components/Header';
import Start from '../Start';

export default function Index() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Header />
      <Start />
    </ThemeProvider>
  );
}