import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 32px;
`;

export const HomeButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.secondaryColor};
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  margin: 8px 16px;
  padding: 16px 32px;
  border-radius: 8px;
  transition: color 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.secondaryColor};
    border: 1px solid ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.backgroundColor};
    transform: scale(1.2);
  }
`;
