import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1250px;
`;

export const Title = styled.h2`
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
  }

  ::after {
    content: "";
    display: block;
    position: relative;
    width: 400px;
    height: 1px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.tertiaryColor};
  }
`;

export const ProjectsList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const ProjectContainer = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;

  :not(:last-of-type) {
    margin-bottom: 100px;
  }
`;

export const ProjectContent = styled.div`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
  display: block;

  :nth-of-type(2n+1) {
    grid-column: 7 / -1;
    text-align: right;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
  }
`;

export const Overline = styled.p`
  margin: 10px 0px;
  color: ${({ theme }) => theme.tertiaryColor};
  font-family: 'Source Code Pro', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const ProjectTitle = styled.h3`
  margin: 0px 0px 20px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  display: block;

  :hover {
    color: ${({ theme }) => theme.tertiaryColor};
  }
`;
