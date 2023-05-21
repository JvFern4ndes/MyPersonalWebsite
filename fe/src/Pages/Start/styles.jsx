import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;
  margin: 0px auto;
  max-width: 1000px;
`;

export const Content = styled.div`
  width: 100%;
  height: 80vh;
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
  margin-top: 1%;
  cursor: pointer;
`;

export const SecondText = styled.div`
  font-size: 64px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 1%;
`;

export const ThirdText = styled.div`
  width: 100%;
  max-width: 40%;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 3%;
`;
