import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Font settings */
    --font-family: "Raleway", sans-serif;
    --font-size-small: 18px;
    --font-size-medium: 36px;
    --font-size-large: 48px;
    --font-size-xlarge: 144px;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --line-height-xsmall: 18.78px;
    --line-height-small: 21.13px;
    --line-height-medium: 42.26px;
    --line-height-large: 56.35px;
    --line-height-xlarge: 169.06px;

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

    /* Padding */
    --padding-size-small: 21px;
    --padding-size-medium: 42px;
    --padding-size-large: 84px;
    --padding-size-xlarge: 161px;

    /* Margin */
    --margin-size-small: 16px;
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
