import styled from 'styled-components';

export const Container = styled.section`
  display: block;
  max-width: 1300px;
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
  }
`;

export const TextAndImage = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 100px;
`;

export const AboutTexts = styled.div`
  display: block;
  color: ${({ theme }) => theme.secondaryColor};
`;

export const Text = styled.div`
  display: block;

  p {
    margin: 0px 0px 15px;
    display: block;

    a {
      display: inline-block;
      position: relative;
      color: ${({ theme }) => theme.tertiaryColor};
      transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
      text-decoration: none;
      text-decoration-skip-ink: auto;
      cursor: pointer;

      ::after {
        content: "";
        display: block;
        width: 0px;
        height: 1px;
        position: relative;
        bottom: 0%.37em;
        background-color: ${({ theme }) => theme.tertiaryColor};
        opacity: 0.5;
      }
    }
  }
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 30px;
    font-family: 'Source Code Pro', sans-serif;

    ::before {
      content: ">>";
      position: absolute;
      top: 5.5px;
      left: 0px;
      color: ${({ theme }) => theme.tertiaryColor};
      line-height: 12px;
      margin-right: 12px;
    }
  }
`;

export const Picture = styled.div`
  position: relative;
  max-width: 300px;
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

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  }

  ::after {
    border: 2px solid ${({ theme }) => theme.tertiaryColor};
    top: 14px;
    left: 14px;
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  }
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
  max-width: 500px;
  display: block;

  img{
    max-width: 100%;
    display: block;
    position: static;

    [alt=""] {
      filter: border-top-left-radius(5px);
    }
  }
`;

export const ImageContainerBrother = styled.div`
  opacity: 0;
  background-color: rgb(232, 232, 232);
  position: absolute;
  inset: 0px;
  object-fit: cover;
  display: block;
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
