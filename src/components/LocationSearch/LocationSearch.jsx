import { useState } from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import { Search } from "lucide-react";
import LocationItem from "../Locationitem/LocationItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./LocationSearch.css";

const LocationSearch = ({
  error,
  locations,
  isLocationSearchOpen,
  handleLocationSearch,
  handleLocationSearchVisibility,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      return;
    }

    handleLocationSearch(searchTerm);
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
      <button
        className="close__trigger"
        onClick={handleLocationSearchVisibility}
      >
        <X />
      </button>
      <form className="location-search__form" onSubmit={handleSearch}>
        <div className="location-search__input">
          <input
            type="text"
            placeholder="search location"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Search className="location-search__input--icon" />
        </div>
        <button className="location-search__trigger">Search</button>
      </form>

      <ErrorMessage error={error} />

      <div className="location__wrapper">
        {locations.map((location, index) => (
          <LocationItem
            key={index}
            text={location}
            handleLocation={() => handleLocationSearch(location)}
          />
        ))}
      </div>
    </div>
  );
};

LocationSearch.propTypes = {
  error: PropTypes.string,
  locations: PropTypes.array,
  isLocationSearchOpen: PropTypes.bool,
  handleLocationSearch: PropTypes.func,
  handleLocationSearchVisibility: PropTypes.func,
};

export default LocationSearch;
