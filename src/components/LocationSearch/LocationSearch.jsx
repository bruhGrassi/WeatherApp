import { useState } from "react";
import PropTypes from "prop-types";
import Close from "../../assets/icons/close.png";
import Search from "../../assets/icons/search.png";
import LocationItem from "../Locationitem/LocationItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./LocationSearch.css";

const LocationSearch = ({
  handleLocationSearch,
  error,
  isLocationSearchOpen,
  locations,
  handleListSearch,
  handleLocationSearched,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      return;
    }

    handleLocationSearched(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      className={`location-search ${
        isLocationSearchOpen ? "location-search--active" : ""
      }`}
    >
      <button className="close__trigger" onClick={handleLocationSearch}>
        <img src={Close} alt="Close icon" />
      </button>
      <form className="location-search__form" onSubmit={handleSearch}>
        <div className="location-search__input">
          <input
            type="text"
            placeholder="search location"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <img src={Search} alt="Search icon" />
        </div>
        <button className="location-search__trigger">Search</button>
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

LocationSearch.propTypes = {
  handleLocationSearch: PropTypes.func,
  handleLocationSearched: PropTypes.func,
  handleListSearch: PropTypes.func,
  error: PropTypes.string,
  isLocationSearchOpen: PropTypes.bool,
  locations: PropTypes.array,
  setLocations: PropTypes.func,
};

export default LocationSearch;
