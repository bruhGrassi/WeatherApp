import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Font settings */
    --font-family: "Raleway", sans-serif;
    --font-size-small: 1.125rem;
    --font-size-medium: 2.25rem;
    --font-size-large: 3rem;
    --font-size-xlarge: 9rem;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --line-height-xsmall: 1.17375rem;
    --line-height-small: 1.320625rem;
    --line-height-medium: 2.64125rem;
    --line-height-large: 3.521875rem;
    --line-height-xlarge: 10.56625rem;

    /* Colors */
    --color-primary: #1e213a;
    --color-secondary: #100e1d;
    --color-tertiary: #e7e7eb;
    --color-action-primary: #e7e7eb;
    --color-action-secondary: #585676;
    --color-action-ternary: #6e707a;
    --color-text-primary-dark: #88869d;
    --color-text-primary-light: #a09fb1;
    --color-text-secondary: #e7e7eb;
    --color-text-tertiary: #110e3c;
    --color-search: #3c47e9;
    --color-skeleton: #414259;
    --color-error: #bd3d3d;

    /* Box shadow */
    --box-shadow: 0px 4px 4px 0px #00000040;

    --size-xs: 0.75rem; 
    --size-sm: 1rem; 
    --size-md: 2rem; 
    --size-lg: 4rem; 

    /* Padding */
    --padding-size-small: 1.3125rem;
    --padding-size-medium: 2.625rem;
    --padding-size-large: 5.25rem;
    --padding-size-xlarge: 10.0625rem;

    /* Margin */
    --margin-size-small: var(--size-sm);
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-Regular.tff") format("tff");
    font-weight: var(--font-weight-regular);
    font-style: normal;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-Medium.tff") format("tff");
    font-weight: var(--font-weight-medium);
    font-style: normal;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-SemiBold.tff") format("tff");
    font-weight: var(--font-weight-semibold);
    font-style: normal;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-Bold.tff") format("tff");
    font-weight: var(--font-weight-bold);
    font-style: normal;
  }

  /* Resets */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button {
    font: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  button:hover {
    scale: 1.1;
    transition: all ease-in-out 0.2s;
  }

  ::-webkit-scrollbar {
    width: 0.3rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default GlobalStyles;
