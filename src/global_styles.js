import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: Arial, Helvetica, sans-serif;
  }

  button, a, p, h1,
  h2, h3, h4, h5,
  ul, li, img,
  input {
    margin: 0;
    padding: 0;
  }

  button, img {
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  @keyframes circle {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;
