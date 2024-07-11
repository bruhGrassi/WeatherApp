import "./WeatherCard.css";

const WeatherCard = ({ city }) => {
  const iconUrl = `http://openweathermap.org/img/wn/10d@2x.png`;
  return (
    <div className="weather-card">
      <div className="weather-card__date">Tomorrow</div>
      <img src={iconUrl} className="weather-card__image" />
      <div className="weather-card__temperature">
        <div className="weather-card__temperature--max">16°</div>
        <div className="weather-card__temperature--min">11°</div>
      </div>
    </div>
  );
};

export default WeatherCard;
