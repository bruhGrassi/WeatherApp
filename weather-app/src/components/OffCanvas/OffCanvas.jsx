import { useState, useEffect } from "React";
import PropTypes from "prop-types";
import Close from "../../assets/icons/close.png";
import Search from "../../assets/icons/search.png";
import LocationItem from "../Locationitem/LocationItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./OffCanvas.css";

const OffCanvas = ({
  handleSidebar,
  handleLocationSearched,
  error,
  isOffCanvas,
  locations,
  handleListSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      return;
    }

    handleLocationSearched(searchTerm);

    if (error) {
      handleSidebar();
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={`off-canvas ${isOffCanvas ? "off-canvas--active" : ""}`}>
      <button className="close__trigger" onClick={handleSidebar}>
        <img src={Close} alt="Close icon" />
      </button>
      <form className="off-canvas__form" onSubmit={handleSearch}>
        <div className="off-canvas__input">
          <input
            type="text"
            placeholder="search location"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <img src={Search} alt="Search icon" />
        </div>
        <button className="off-canvas__search">Search</button>
      </form>

      <ErrorMessage error={error} />

      <div className="location__wrapper">
        {locations.map((location, index) => (
          <LocationItem
            key={index}
            text={location}
            handleLocation={() => handleListSearch(location)}
          />
        ))}
      </div>
    </div>
  );
};

OffCanvas.propTypes = {
  handleSidebar: PropTypes.func,
  handleLocationSearched: PropTypes.func,
  error: PropTypes.string,
  isOffCanvas: PropTypes.bool,
  locations: PropTypes.array,
  handleListSearch: PropTypes.func,
};

export default OffCanvas;
