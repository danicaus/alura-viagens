import { createGlobalStyle } from 'styled-components';
import theme from './index';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.primary};
    
    font-family: ${theme.fontFamily.common}
  }
`;

export default GlobalStyle;
