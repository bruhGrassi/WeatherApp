import styled from "styled-components";

export const Wrapper = styled.div`
  font-weight: var(--font-weight-medium);
  color: var(--color-tertiary);
  text-align: center;
  flex: 1;
  background-color: var(--color-primary);
  padding: var(--size-md);

  @media (max-width: 1023px) {
    padding: var(--size-sm);
  }
`;

export const Title = styled.p`
  width: 100%;
  font-size: var(--size-sm);
  line-height: var(--line-height-xsmall);
  color: var(--color-tertiary);
`;

export const Data = styled.div`
  font-size: var(--size-lg);
  font-weight: var(--font-weight-bold);
  line-height: 4.696rem;
  padding: var(--size-xs) 0;

  @media (max-width: 1023px) {
    font-size: var(--size-md);
  }
`;

export const Unit = styled.span`
  font-size: 2.25rem;
  line-height: 2.641rem;
  margin-left: 0.375rem;
`;

export const Other = styled.div`
  font-size: 0.875rem;
  line-height: 1.0275rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Icon = styled.span`
  width: 1.8125rem;
  height: 1.8125rem;
  border-radius: 50%;
  background-color: var(--color-action-ternary);
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: var(--size-sm);
    fill: var(--color-action-primary);
  }
`;

export const Range = styled.div`
  width: 100%;
`;
