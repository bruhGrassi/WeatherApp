import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const RoundButton = ({ children, variant, isActive, onClick }) => {
  const ButtonVariantes = {
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

  const Button = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: var(--box-shadow);

    ${(props) => ButtonVariantes[props.variant]}

    ${(props) =>
      props.isActive &&
      css`
        background: var(--color-tertiary);
        color: var(--color-text-tertiary);
      `}
  `;

  return (
    <Button variant={variant} isActive={isActive} onClick={onClick}>
      {children}
    </Button>
  );
};

RoundButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default RoundButton;
