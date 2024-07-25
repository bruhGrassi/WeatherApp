import { useState } from "react";
import PropTypes from "prop-types";
import { X, Search } from "lucide-react";
import LocationItem from "../Locationitem/LocationItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  LocationListWrapper,
  LocationSearchWrapper,
  CloseTrigger,
  LocationSearchForm,
  LocationSearchInputWrapper,
  LocationSearchTrigger,
} from "./styles";

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
    <LocationSearchWrapper isLocationSearchOpen={isLocationSearchOpen}>
      <CloseTrigger onClick={handleLocationSearchVisibility}>
        <X />
      </CloseTrigger>
      <LocationSearchForm onSubmit={handleSearch}>
        <LocationSearchInputWrapper>
          <input
            type="text"
            placeholder="search location"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Search />
        </LocationSearchInputWrapper>
        <LocationSearchTrigger>Search</LocationSearchTrigger>
      </LocationSearchForm>

      <ErrorMessage error={error} />

      <LocationListWrapper>
        {locations.map((location, index) => (
          <LocationItem
            key={index}
            text={location}
            handleLocation={() => handleLocationSearch(location)}
          />
        ))}
      </LocationListWrapper>
    </LocationSearchWrapper>
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
