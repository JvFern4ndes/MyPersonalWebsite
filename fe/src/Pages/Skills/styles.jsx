import styled from 'styled-components';

export const Container = styled.section`
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1000px;
  display: block;
`;

export const SkillsPageTitle = styled.h2`
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
    font-size: 32px;
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
  }
`;
