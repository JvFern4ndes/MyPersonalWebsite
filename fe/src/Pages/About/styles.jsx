import styled from 'styled-components';

export const Container = styled.section`
  display: block;
  max-width: 900px;
  margin: 0px auto;
  padding: 100px 0px;
  -webkit-font-smoothing: antialiased;

  h2 {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: 32px;
    white-space: nowrap;
    font-weight: 600;
    line-height: 1.1;

    ::before {
      position: relative;
      counter-increment: section 1;
      content: "0" counter(section) ".";
      margin-right: 10px;
      color: ${({ theme }) => theme.tertiaryColor};
      font-family: 'Source Code Pro', sans-serif;
      font-size: 20px;
      font-weight: 400;
      white-space: nowrap;
      line-height: 1.1;
    }

    ::after {
      content: "";
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: ${({ theme }) => theme.tertiaryColor};
      font-size: 20px;
      white-space: nowrap;
      font-weight: 600;
      line-height: 1.1;
    }
  }
`;

export const Content = styled.div`
  height: 80vh;
  margin-left: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 40%;
  font-family: 'Source Code Pro', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4%;

  :after {
    content: '';
    position: absolute;
    width: 16%;
    border-top: 1px solid ${({ theme }) => theme.secondaryColor};
    margin-top: 1%;
    margin-left: 1%;
  }
`;

export const TextAndImage = styled.div`
  display: flex;
  align-items: center;
`;

export const Texts = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 8%;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 4%;
`;

export const Photo = styled.div`
  position: relative;
  display: inline-block;
  width: 20%;
  transition: transform 0.5s ease-in-out;

  img {
    max-width: 100%;
  }

  :hover {
    transform: scale(1.2);
  }
`;

export const ColorLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: calc(100% - 6px);
  background-color: ${({ theme }) => theme.tertiaryColor};
  opacity: 0.3;
  transition: opacity 0.5s ease-in-out;

  :hover {
    opacity: 0;
  }
`;

export const Border = styled.div`
  position: absolute;
  top: 6%;
  left: 10%;
  width: 100%;
  height: 100%;
  border: 4px solid ${({ theme }) => theme.tertiaryColor};
  border-radius: 4px;
  z-index: -1;
`;

export const Technologies = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  width: 40%;
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  img{
    max-width: 5%;
    margin-right: 4%;
  }
`;

export const IconAndText = styled.div`
  display: flex;
  margin-bottom: 4%;
`;
