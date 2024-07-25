import PropTypes from "prop-types";
import { Navigation } from "lucide-react";
import PercentageLine from "../../components/PercentageLine/PercentageLine";
import { Wrapper, Title, Data, Unit, Other, Icon, Range } from "./styles";

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
