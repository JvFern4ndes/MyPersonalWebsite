import styled from 'styled-components';

export const Container = styled.section`
  max-width: 600px;
  margin: 0px auto 100px;
  text-align: center;
  padding: 100px 0px;
  display: block;
`;

export const NumberedTitle = styled.h2`
  display: block;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.tertiaryColor};
  font-family: 'Source Code Pro', sans-serif;
  font-size: 20px;
  font-weight: 400;
  -webkit-box-align: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  white-space: nowrap;
  line-height: 1.1;
  text-align: center;

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
`;
