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
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  position: relative;
  display: flex;
  gap: 10px;
  -webkit-box-align: center;
  align-items: center;
  text-align: -webkit-match-parent;
  list-style: none;
  overflow: hidden;

  :not(:last-of-type) {
    margin-bottom: 100px;
  }

  img{
    position: relative;
    border-radius: 4px;
    mix-blend-mode: multiply;

  }
`;

export const ProjectContent = styled.div`
  position: absolute;
  display: block;
  z-index: 10;
  margin-left: 900px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
  }
`;

export const Content = styled.div`
  display: flex;
  margin-left: -70px;
  flex-direction: column;
  align-items: flex-end;
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

export const ProjectDescription = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 20px;
  display: block;
  text-align: right;

  p:last-child, p:last-of-type {
    margin: 0px;
  }
`;

export const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;

  :nth-of-type(2n+1) {
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
`;

export const TechOfList = styled.li`
  color: ${({ theme }) => theme.secondaryColor};
  font-family: 'Source Code Pro', sans-serif;
  white-space: nowrap;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;

  :nth-of-type(1n+1) {
    margin: 0px 0px 5px 20px;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  list-style: none;

  :nth-of-type(1n+1) {
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-left: 0px;
    margin-right: -10px;
    text-align: right;
  }

  a {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px;
    position: relative;
    z-index: 1;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    cursor: pointer;
  }

  img {
    width: 24px;
  }
`;

export const Picture = styled.div`
  position: relative;
  max-width: 100%;
  display: block;
`;

export const Wrapper = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  display: block;
  position: relative;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.tertiaryColor};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;

  img {
    position: relative;
    border-radius: 4px;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  }
`;

export const ImageContainer = styled.div`
  width: 70%;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;

  img {
    max-width: 100%;
    display: block;
    position: relative;
  }
`;
