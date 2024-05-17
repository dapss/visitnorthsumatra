import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('Medan');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cities = ['Medan', 'Tebing Tinggi', 'Tanjungbalai', 'Sibolga', 'Pematangsiantar', 'Padang Sidempuan', 'Binjai'];

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: city,
            units: 'metric',
            appid: 'b9148fc5d58e28ecd27588fa07471a29',
          },
        });
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error: {error}</p>;

  const weatherIconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div className="weather-section">
      <div className="container">
        <div className="city-selector">
          {/* <label htmlFor="city">Choose a city:</label> */}
          <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="weather-card card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Weather in {city}</h5>
            <div className="weather-details d-flex align-items-center">
              <img src={weatherIconUrl} alt={weather.weather[0].description} className="weather-icon" />
              <div className="ml-3">
                <h6 className="temperature">{weather.main.temp}°C</h6>
                <p className="feels-like">Feels like: {weather.main.feels_like}°C</p>
                <p className="description">{weather.weather[0].description}</p>
                <p className="humidity">Humidity: {weather.main.humidity}%</p>
                <p className="pressure">Pressure: {weather.main.pressure} hPa</p>
                <p className="wind-speed">Wind Speed: {weather.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
