import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
    display: block;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  body {
    margin: 0px;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.backgroundColor};
    font-family: 'Inter', monospace;
    color: ${({ theme }) => theme.color};
    font-size: 20px;
    line-height: 1.3;
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
