import styled from "styled-components";

export const Item = styled.button`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-xsmall);
  color: var(--color-tertiary);
  padding: 0.75rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border 0.3s ease;
  text-transform: uppercase;

  svg {
    width: 2rem;
    opacity: 0;
  }

  &:hover {
    border: 1px solid var(--color-tertiary);
    transition: border 0.3s ease;
    scale: 1;

    & svg {
      opacity: 1;
    }
  }

  @media (max-width: 1023px) {
    max-height: 35rem;
  }
`;
