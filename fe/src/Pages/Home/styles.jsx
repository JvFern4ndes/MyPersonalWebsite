import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 80vh;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const FirstText = styled.div`
  color: ${({ theme }) => theme.tertiaryColor};
`;

export const Name = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  margin-top: 16px;
`;

export const SecondText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 64px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 16px;
`;

export const ThirdText = styled.div`
  width: 100%;
  max-width: 40%;
  color: ${({ theme }) => theme.secondaryColor}
`;
