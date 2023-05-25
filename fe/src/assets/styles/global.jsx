import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border;
    width: 100%;
    scroll-behavior: smooth;
  }

  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', monospace;
    line-height: 1.5;
  }

  body {
    margin: 0px;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    font-size: 20px;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.tertiaryColor};
    border: 3px solid ${({ theme }) => theme.backgroundColorLight};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundColorLight};
  }
`;
