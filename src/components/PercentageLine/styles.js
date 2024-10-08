import styled from "styled-components";

export const PercentageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 18.75rem;
  margin: 0 auto;
`;

export const PercentageSteps = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.625rem;
  color: var(--color-tertiary);
`;

export const PercentageProgress = styled.progress`
  width: 100%;
  height: 0.5rem;
  -webkit-appearance: none;

  &::-webkit-progress-bar {
    background: #e0e0e0;
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background: #ffec65;
    border-radius: 5px;
  }

  &::-moz-progress-bar {
    background: #ffec65;
    border-radius: 5px;
  }
`;

export const PercentageLabel = styled.div`
  width: 100%;
  text-align: right;
  font-size: 0.625rem;
  color: var(--color-tertiary);
`;
