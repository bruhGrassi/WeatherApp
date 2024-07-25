import styled, { css } from "styled-components";

export const LocationListWrapper = styled.div`
  max-height: 90%;
  overflow: auto;
  padding-right: 1rem;
  margin-top: var(--padding-size-medium);
`;

export const LocationSearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding-top: var(--font-size-medium);
  top: 0;
  left: 0;
  z-index: 100;
  padding: var(--padding-size-medium);
  background-color: var(--color-primary);
  transform: translateX(-100%);
  transition: all ease-in-out 0.4s;

  ${({ isLocationSearchOpen }) =>
    isLocationSearchOpen &&
    `
      transform: translateX(0);
    `}
`;

export const CloseTrigger = styled.button`
  background: transparent;
  width: 1.084375rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
  height: 2rem;
  width: 2rem;
  color: var(--color-action-primary);
`;

export const LocationSearchForm = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

export const LocationSearchInputWrapper = styled.div`
  height: 3rem;
  flex: 1;
  position: relative;

  & input {
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-tertiary);
    background-color: var(--color-primary);
    padding: 0 0.5rem 0 2.375rem;
    color: var(--color-tertiary);
    border-radius: 0.25rem;
    outline: none;

    &::placeholder {
      color: var(--color-tertiary);
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    width: 1.09375rem;
    transform: translateY(-50%);
    color: var(--color-action-primary);
  }
`;

export const LocationSearchTrigger = styled.button`
  height: 3rem;
  width: 5.375rem;
  background: var(--color-search);
  color: var(--color-tertiary);
  font-size: 1rem;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-xsmall);
`;
