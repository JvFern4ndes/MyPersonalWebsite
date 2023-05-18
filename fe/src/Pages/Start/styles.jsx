import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FirstText = styled.div`
  font-family: 'Source Code Pro', sans-serif;
  color: ${({ theme }) => theme.tertiaryColor};
`;

export const Name = styled.div`
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  margin-top: 16px;
  cursor: pointer;
`;

export const SecondText = styled.div`
  font-size: 64px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 16px;
`;

export const ThirdText = styled.div`
  width: 100%;
  max-width: 40%;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 40px;
`;
