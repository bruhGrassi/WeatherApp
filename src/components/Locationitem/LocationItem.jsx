import PropTypes from "prop-types";
import { Item } from "./LocationItem";
import { ChevronRight } from "lucide-react";

const LocationItem = ({ text, handleLocation }) => {
  return (
    <Item onClick={handleLocation}>
      {text}
      <ChevronRight />
    </Item>
  );
};

LocationItem.propTypes = {
  text: PropTypes.string,
  handleLocation: PropTypes.func,
};

export default LocationItem;
