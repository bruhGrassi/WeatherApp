import styled, { css } from "styled-components";

const ButtonVariants = {
  primary: css`
    font-family: var(--font-family);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-small);
    background: var(--color-action-secondary);
    color: var(--color-action-primary);
  `,
  icon: css`
    background-color: var(--color-action-ternary);
    color: var(--color-action-primary);

    & img {
      width: 1.375rem;
    }
  `,
};

export const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: var(--box-shadow);

  ${({ $variant }) => ButtonVariants[$variant]}

  ${({ isActive }) =>
    isActive &&
    css`
      background: var(--color-tertiary);
      color: var(--color-text-tertiary);
    `}
`;
