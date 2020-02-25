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
  
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: calc(10px + 1.3vmin);
  flex: 1 0 10%;
}

img {
  width: 100%;
  max-width: 240px;
  height: auto;
}
`;

export default GlobalStyle;
