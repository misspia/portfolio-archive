import styled, { css } from 'styled-components'
import { Colors, Fonts, Metrics } from '../themes/themes.js'

export const Container = styled.nav`
  font-size: 1.5em;

  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5em;
  width: 100%;

  box-sizing: border-box;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${Colors.white};
  background-color: transparent;

  @media ${Metrics.mobileBreakPoint} {
    justify-content: flex-end;
    font-size: 1.1em;
  }
`;

export const Brand = styled.div`
  position: relative;
  cursor: pointer;

  a {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  @media ${Metrics.mobileBreakPoint} {
    display: none;
  }
`;

export const Heading = styled.div`
  font-size: 1em;
  font-weight: ${Fonts.weightBold};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const Subheading = styled.div`
  font-size: 0.8em;
  letter-spacing: 0.5em;
`;

const tab = css`
  padding: 0 0.5em;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: ${Colors.black};
  text-decoration: none;

  transition: 0.2s all;
  &:hover {
    color: ${Colors.pink};
  }
  &:active, &:visited {
    outline: none;
  }

  cursor: pointer;
`;

export const Tabs = styled.div`
  display: flex;

  a, div {
    ${tab}
  }
`;
