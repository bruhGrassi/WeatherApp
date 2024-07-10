import RightArrow from "../../assets/icons/right-arrow.png";
import "./LocationItem.css";

const LocationItem = ({ handleLocation, text }) => {
  return (
    <button className="location-item" onClick={handleLocation}>
      {text}
      <img src={RightArrow} alt="Arrow right icon" />
    </button>
  );
};

export default LocationItem;
