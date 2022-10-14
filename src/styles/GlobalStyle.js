import { createGlobalStyle } from 'styled-components';
import AsapCondensedFont from './fonts';

export default createGlobalStyle`
${AsapCondensedFont}
  body{
    background-color: #111111;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-family: 'Asap Condensed', sans-serif;
    color: #FFFFFF;
  }
`;
