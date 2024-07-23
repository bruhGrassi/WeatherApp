import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Navigation } from "lucide-react";
import PercentageLine from "../../components/PercentageLine/PercentageLine";
import "./HighlightCard.css";

const commonStyles = css`
  font-family: inherit;
  font-weight: var(--font-weight-medium);
  color: var(--color-tertiary);
  text-align: center;
`;

const Wrapper = styled.div`
  flex: 1;
  background-color: var(--color-primary);
  padding: 2rem;

  @media (max-width: 1023px) {
    padding: 1rem;
  }
`;

const Title = styled.p`
  ${commonStyles}
  width: 100%;
  font-size: 1rem;
  line-height: var(--line-height-xsmall);
  color: var(--color-tertiary);
`;

const Data = styled.div`
  ${commonStyles}
  font-size: 4rem;
  font-weight: var(--font-weight-bold);
  line-height: 4.696rem;
  padding: 0.75rem 0;

  @media (max-width: 1023px) {
    font-size: 2rem;
  }
`;

const Unit = styled.span`
  ${commonStyles}
  font-size: 2.25rem;
  line-height: 2.641rem;
  margin-left: 0.375rem;
`;

const Other = styled.div`
  ${commonStyles}
  font-size: 0.875rem;
  line-height: 1.0275rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Icon = styled.span`
  width: 1.8125rem;
  height: 1.8125rem;
  border-radius: 50%;
  background-color: var(--color-action-ternary);
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 1rem;
    fill: var(--color-action-primary);
  }
`;

const Range = styled.div`
  width: 100%;
`;

const HighlightCard = ({ title, data, unit, other, range }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Data>
        {data}
        <Unit>{unit}</Unit>
      </Data>
      {other && (
        <Other>
          <Icon>
            <Navigation />
          </Icon>
          WSW
        </Other>
      )}
      {range && (
        <Range>
          <PercentageLine percentage={range} />
        </Range>
      )}
    </Wrapper>
  );
};

HighlightCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.number,
  unit: PropTypes.string,
  other: PropTypes.bool,
  range: PropTypes.number,
};

export default HighlightCard;
