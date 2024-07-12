import { useState } from "React";
import Close from "../../assets/icons/close.png";
import Search from "../../assets/icons/search.png";
import LocationItem from "../Locationitem/LocationItem";
import "./Sidebar.css";

const Sidebar = ({ handleSidebar, fetchWeather }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    fetchWeather(searchTerm);
    setSearchTerm("");
    handleSidebar();
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
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

      <LocationItem text={"London"} />
      <LocationItem text={"London"} />
      <LocationItem text={"London"} />
      <LocationItem text={"London"} />
    </div>
  );
};

export default Sidebar;
