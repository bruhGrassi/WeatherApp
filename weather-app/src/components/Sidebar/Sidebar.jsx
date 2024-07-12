import { useState, useEffect } from "React";
import Close from "../../assets/icons/close.png";
import Search from "../../assets/icons/search.png";
import LocationItem from "../Locationitem/LocationItem";
import "./Sidebar.css";

const Sidebar = ({ handleSidebar, fetchWeather }) => {
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

    const weatherData = await fetchWeather(searchTerm);

    if (weatherData) {
      setLocations((locations) => [...locations, searchTerm]);
      setSearchTerm("");
      handleSidebar();
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleListSearch = async (location) => {
    await fetchWeather(location);
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

export default Sidebar;
