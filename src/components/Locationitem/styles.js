import styled from "styled-components";

export const Item = styled.button`
  width: 100%;
  height: var(--size-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--size-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-xsmall);
  color: var(--color-tertiary);
  padding: var(--size-xs);
  cursor: pointer;
  border: 1px solid transparent;
  transition: border 0.3s ease;
  text-transform: uppercase;

  svg {
    width: var(--size-md);
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
