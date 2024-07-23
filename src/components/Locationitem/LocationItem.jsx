import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import "./LocationItem.css";

const LocationItem = ({ text, handleLocation }) => {
  return (
    <button className="location-item" onClick={handleLocation}>
      {text}
      <ChevronRight />
    </button>
  );
};

LocationItem.propTypes = {
  text: PropTypes.string,
  handleLocation: PropTypes.func,
};

export default LocationItem;
