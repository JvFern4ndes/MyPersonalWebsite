import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', monospace;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 16px;
    color: ${({ theme }) => theme.color};
    width: 100%;
  }

  button {
    cursor: pointer;
  }
`;
