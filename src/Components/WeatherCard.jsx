import React from 'react';

const WeatherCard = ({ data }) => {
  const { main, weather, wind, name } = data;
  
  return (
    <div className="weather-card">
      <h2>Weather in {name}</h2>
      <div className="weather-data">
      <p className="data">Temperature: {main.temp}°C</p>
      <p className="data">Humidity: {main.humidity}%</p>
      <p className="data">Weather Condition: {weather[0].description}</p>
      <p className="data">Wind Speed: {wind.speed} m/s</p>
      </div>
      
    </div>
  );
};

export default WeatherCard;
