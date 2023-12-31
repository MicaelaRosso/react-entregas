import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
    --green-bg: #00b300;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
    --boxshadowfooter: 20px -20px 50px rgba(53, 209, 71, 0.45);
    --gradientback: linear-gradient(90deg, #353533 0%, #1ec34f 100%);
  --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
  --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  margin: 0;
  padding: 0;
  width: 100%;
  
  
  }
  html{
    
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    background: #131415;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;