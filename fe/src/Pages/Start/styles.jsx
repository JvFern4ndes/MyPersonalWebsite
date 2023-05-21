import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0px;
  margin: 0px auto;
  max-width: 1000px;
  padding: 100px 0px;
`;

export const Content = styled.div`
  display: block;

  h1 {
    margin: 0px 0px 30px 4px;
    color: ${({ theme }) => theme.tertiaryColor};
    font-family: 'Source Code Pro', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.1px;
    box-sizing: inherit;
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    :-webkit-any(article, ascent-override, nav-down, section) {
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
    }
  }

  h2 {
    margin: 0px;
    font-size: 64px;
    margin: 0px 0px 10px;
    font-weight: 600;
    line-height: 1.1;
    box-sizing: inherit;
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h3 {
    margin-top: 5px;
    font-size: 64px;
    font-weight: 600;
    color: ${({ theme }) => theme.secondaryColor};
    line-height: 0.9;
    display: block;
  }
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
