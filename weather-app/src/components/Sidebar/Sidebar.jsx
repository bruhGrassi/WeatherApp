import { useState, useEffect } from "React";
import PropTypes from "prop-types";
import Close from "../../assets/icons/close.png";
import Search from "../../assets/icons/search.png";
import LocationItem from "../Locationitem/LocationItem";
import "./Sidebar.css";

const Sidebar = ({ handleSidebar, onLocationSearched }) => {
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

    onLocationSearched(searchTerm);

    setLocations((locations) => {
      const newLocation = [...locations, searchTerm];
      handleSidebar();
      setSearchTerm("");
      return newLocation;
    });
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleListSearch = async (location) => {
    onLocationSearched(location);
    handleSidebar();
  };

  return (
    <div className="sidebar">
      <button className="close__trigger" onClick={handleSidebar}>
        <img src={Close} alt="Close icon" />
      </button>
      <form className="sidebar__form" onSubmit={handleSearch}>
        <div className="sidebar__input">
          <input
            type="text"
            placeholder="search location"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <img src={Search} alt="Search icon" />
        </div>
        <button className="sidebar__search">Search</button>
      </form>

      {locations.map((location, index) => (
        <LocationItem
          key={index}
          text={location}
          handleLocation={() => handleListSearch(location)}
        />
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  handleSidebar: PropTypes.func,
  onLocationSearched: PropTypes.func,
};

export default Sidebar;
