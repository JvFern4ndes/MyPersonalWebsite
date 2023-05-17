import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 32px;

  h1, p {
    font-family: 'Source Code Pro', sans-serif;
  }
`;

export const HomeButton = styled.button`
  font-family: 'Source Code Pro', sans-serif;
  font-weight: bold;
  background: transparent;
  color: ${({ theme }) => theme.tertiaryColor};
  border: 1px solid ${({ theme }) => theme.tertiaryColor};
  margin: 8px 16px;
  padding: 16px 32px;
  border-radius: 8px;
  transition: color 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.tertiaryColor};
    border: 1px solid ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.backgroundColor};
    transform: scale(1.2);
  }
`;
