import styled, { css } from "styled-components";

const CommonStyle = css`
  width: 100%;
  min-width: 100%;
  min-height: 100vh;
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  min-width: 28.688rem;
  background-color: var(--color-primary);
  padding: var(--padding-size-medium);
  max-height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 1023px) {
    ${CommonStyle}
  }
`;

export const Main = styled.main`
  max-height: 100vh;
  flex: 1;
  background-color: var(--color-secondary);
  padding: 2.625rem 5.25rem 1.313rem;
  overflow: auto;

  @media (max-width: 1023px) {
    ${CommonStyle}
    padding: 2rem 2rem 1rem;
  }

  @media (max-width: 1280px) {
    padding: 2rem 2rem 1rem;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: var(--padding-size-medium);
  gap: 12px;
`;

export const MainWeather = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1281px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const MainHighlightText = styled.p`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.76125rem;
  text-align: left;
  color: var(--color-tertiary);
  margin: 3.875rem 0 2rem 0;
`;

export const MainHighlight = styled.div`
  display: grid;
  gap: 1rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1281px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Link = styled.a`
  display: block;
  width: 100%;
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  line-height: 1.067rem;
  text-align: center;
  color: var(--color-text-primary-light);
  text-decoration: none;
  padding: 4rem 0 1rem 0;

  & span {
    font-weight: var(--font-weight-semibold);
  }

  &:visited {
    color: var(--color-text-primary-light);
  }
`;
