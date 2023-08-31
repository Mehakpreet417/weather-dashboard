
import './WeatherUI.css';
import React, { useState } from 'react';
import WeatherCard from './WeatherCard'; 

const WeatherUI = ({ onCitySelected, onCitiesLoaded }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = 'f615fb52e5158ba666e32c7ad7b7f978'; 
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-ui">
      <h1> Weather Station Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='weather-data'>{weatherData && <WeatherCard data={weatherData} />}</div>
    </div>
  );
};

export default WeatherUI;
