import styled from 'styled-components'
import { Fonts } from '../themes/themes.js'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: ${Fonts.family};
  font-size: ${Fonts.sizeRegular};
`;
