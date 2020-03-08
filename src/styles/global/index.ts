import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  background-color: #282c34;
  color: #f5f5f5;
  font-size: 18px;
  @media(min-width: 767px){
    font-size: 22px;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
  line-height: 1.1;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 48px;
  @media(min-width: 767px){
    font-size: 60px
  }
}

h2 {
  font-size: 40px;
  @media(min-width: 767px){
    font-size: 48px;
  }
}

h4 {
    font-size: 20px;
    @media(min-width: 767px){
    font-size: 28px;
  }
}

  
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

li {
  font-size: 16px;
  flex: 1 0 10%;
  @media(min-width: 767px){
    font-size: 20px;
  }
}
`;

export default GlobalStyle;
