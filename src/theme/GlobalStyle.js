import { createGlobalStyle } from 'styled-components';
import theme from './index';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #35B6FF;

    font-family: ${theme.fontFamily.common}
  }
`;

export default GlobalStyle;
