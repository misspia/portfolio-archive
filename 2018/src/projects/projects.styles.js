import styled, { css, keyframes } from 'styled-components'
import { Colors, Fonts, Styles, Metrics } from '../themes/themes.js'

export const Container = Styles.SectionContainer.extend`

`;

export const Content = styled.div`
  &>div {
    height: 45vh;
    transition: 0.4s all;

    @media ${Metrics.mobileBreakPoint} {
      height: 60vh;
    }
  }
  font-size: 1.1em;
`;

export const Title = Styles.SectionTitle;


export const ProjectContainer = styled.div`
  margin: 0;
  position: relative;
  width: 100%;
  height: 90%;
  overflow: hidden;

  box-shadow: 0em 0.2em 3em 0.1em ${Colors.shadow};
  transition: 0.4s all;
  perspective: 800px;
  @media ${Metrics.mobileBreakPoint} {
    justify-content: flex-end;
  }
`;

export const BGImage = styled.img`
  z-index: -1;
  position: absolute;
  margin: auto;
  top: 0; bottom: 0; left: 0; right: 0;
  width: 100%;
  height: auto;

  transition: all 0.2s;

  ${ProjectContainer}:hover & {
    transform: scale(1.3);
    filter: brightness(200%);
  }
  @media ${Metrics.mobileBreakPoint} {
    height: 100%;
    width: auto;
  }
`;

export const HiddenInfo = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;

  color: ${Colors.white};
  text-transform: uppercase;

  transition 0.4s all;
  opacity: 0;

  transform-origin: right bottom;
  transform: translateY(150px) rotateX(-180deg);

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${Colors.black};
    transition: 0.4s all;
  }
  ${ProjectContainer}:hover & {
    opacity: 1;
    transform: none;
    &:before {
      width: 100%;
    }
`;

export const Subtitle = styled.div`
  font-size: 1.5em;
  font-weight: ${Fonts.weightBold};
  letter-spacing: 0.2em;

  opacity: 0;
  transform: translate(-1em, 1em);
  transition: all 0.4s;
  transition-delay: 0.4s;

  ${ProjectContainer}:hover & {
    opacity: 1;
    transform: none;
  }
`;

export const LinksRow = styled.div`
  margin-top: 1em;
  display: flex;
  width: 100%;
  height 2.5em;
`;

const LinkButton = styled.a`
  margin-right: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5em 1em;
  box-sizing: border-box;

  cursor: pointer;

  color: ${Colors.white};
  background-color: transparent;
  border: solid 0.1em ${Colors.white};
  text-decoration: none;

  &:visited, &:active {
    outline: none;
  }

  opacity: 0;
  transform: translateY(1em);
  transition: all 0.4s;
  transition-delay: 0.5s;

  ${ProjectContainer}:hover & {
    opacity: 1;
    transform: none;
  }
`;

export const DemoButton = LinkButton.extend`
  transition-delay: 0.5s;
`;

export const SourceCodeButton = LinkButton.extend`
  transition-delay: 0.6s;
`;

export const Icon = Styles.Icon;
