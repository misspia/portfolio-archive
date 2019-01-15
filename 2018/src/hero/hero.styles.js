import styled from 'styled-components'
import { Colors, Fonts, Styles } from '../themes/themes.js'

export const Section = Styles.SectionContainer.extend`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Modal = styled.header`
  position: absolute;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1em;
  color: ${Colors.white};
`;


export const Heading = styled.h1`
  margin: 0.5em 0;
  font-size: 2em;
  font-weight: ${Fonts.weightBold};
  text-transform: uppercase;
  letter-spacing: 0.3em;

`;

export const Subheading = styled.h2`
  margin: 0;
  font-size: 1.5em;
  font-weight: ${Fonts.weightRegular};
  letter-spacing: 0.8em;
`;
