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
    background: var(--gray-100);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    height: 100vh
  }

  ol, ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: 300;
  }

  button {
    border: 0;
    cursor: pointer;
  
    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
  
  a {
    text-decoration: none;
    color: var(--black);
  }

  .ReactModal__Overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999;
  }

  
  :root {
    --red-900: ${(props) => props.theme.colors['red-900']};
    --red-500: ${(props) => props.theme.colors['red-500']};
    --red-100: ${(props) => props.theme.colors['red-100']};
    --green-900: ${(props) => props.theme.colors['green-900']};
    --green-100: ${(props) => props.theme.colors['green-100']};
    --black-900: ${(props) => props.theme.colors['black-900']};
    --black-800: ${(props) => props.theme.colors['black-800']};
    --black-700: ${(props) => props.theme.colors['black-700']};
    --white-900: ${(props) => props.theme.colors['white-900']};
    --gray-900: ${(props) => props.theme.colors['gray-900']};
    --gray-800: ${(props) => props.theme.colors['gray-800']};
    --gray-700: ${(props) => props.theme.colors['gray-700']};
    --gray-600: ${(props) => props.theme.colors['gray-600']};
    --gray-500: ${(props) => props.theme.colors['gray-500']};
    --gray-300: ${(props) => props.theme.colors['gray-300']};
    --gray-200: ${(props) => props.theme.colors['gray-200']};
    --gray-100: ${(props) => props.theme.colors['gray-100']};
  }
`
