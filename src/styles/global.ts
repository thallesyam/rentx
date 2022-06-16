import { createGlobalStyle } from 'styled-components'

// font-family: 'Archivo', sans-serif;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  
  html {
    @media(max-width: 1080px){
		  font-size: 93.75%;
    }
    @media(max-width: 720px){
		  font-size: 87.5%;
    } 
  }
  body {
    background: var(--background);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    height: 100vh
  }
  ol, ul {
    list-style: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .ReactGridGallery_tile-viewport, .ReactGridGallery_tile {
    border-radius: 1rem;
  }
  :root {
  }
`
