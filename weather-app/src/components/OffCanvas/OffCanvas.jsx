import { useState, useEffect } from "React";
import PropTypes from "prop-types";
import Close from "../../assets/icons/close.png";
import Search from "../../assets/icons/search.png";
import LocationItem from "../Locationitem/LocationItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./OffCanvas.css";

const Sidebar = ({
  handleSidebar,
  handleLocationSearched,
  error,
  isOffCanvas,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const storedLocations = localStorage.getItem("locations");
    if (storedLocations) {
      setLocations(JSON.parse(storedLocations));
    }
  }, []);

  useEffect(() => {
    if (locations.length > 0) {
      localStorage.setItem("locations", JSON.stringify(locations));
    }
  }, [locations]);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      return;
    }

    handleLocationSearched(searchTerm);

    setLocations((locations) => {
      const newLocation = [...locations, searchTerm];
      setSearchTerm("");
      return newLocation;
    });

    if (error) {
      handleSidebar();
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleListSearch = async (location) => {
    handleLocationSearched(location);
    handleSidebar();
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

Sidebar.propTypes = {
  handleSidebar: PropTypes.func,
  handleLocationSearched: PropTypes.func,
  error: PropTypes.string,
  isOffCanvas: PropTypes.bool,
};

export default Sidebar;
