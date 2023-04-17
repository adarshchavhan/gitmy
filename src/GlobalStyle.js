import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font1};
  }
  
  html{
    background: ${({ theme }) => theme.darkColor};
  }
  &::-webkit-scrollbar{
    width: 10px;
    background-color: #e0e0e0;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: ${({ theme }) => theme.baseColor};
  }
  h2{
    font-size: 32px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: 14px;
  }
  small{
    font: 12px;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyle;
