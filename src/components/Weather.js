import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('Medan');
  const [weather, setWeather] = useState(null);
  
  const cities = ['Medan', 'Parapat', 'Berastagi', 'Bukit Lawang'];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: { q: city, units: 'metric', appid: 'b9148fc5d58e28ecd27588fa07471a29' },
        });
        setWeather(response.data);
      } catch (err) { console.error(err); }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="container">
      <div className="weather-strip row align-items-center justify-content-center mx-3 mx-md-0">
        
        <div className="col-md-3 text-center mb-3 mb-md-0 border-right border-secondary">
          <span className="text-uppercase text-white-50 d-block text-small mb-2" style={{fontSize: '0.7rem', letterSpacing:'1px'}}>
            Select Location
          </span>
          
          <div className="d-inline-block position-relative pb-1" style={{borderBottom: '1px solid rgba(255,255,255,0.3)'}}>
             <select 
                className="form-control bg-transparent text-white border-0 text-center font-weight-bold shadow-none p-0" 
                style={{
                    fontSize: '1.2rem', 
                    cursor: 'pointer',
                    appearance: 'none',
                    paddingRight: '25px', 
                    background: 'transparent',
                    minWidth: '140px'
                }}
                value={city} 
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map(c => <option key={c} value={c} style={{color: 'black'}}>{c}</option>)}
              </select>
              
              <span style={{
                  position: 'absolute',
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#C26D53',
                  pointerEvents: 'none',
                  fontSize: '0.8rem'
              }}>
                ▼
              </span>
          </div>
        </div>

        {weather ? (
          <>
            <div className="col-md-3 text-center d-flex align-items-center justify-content-center border-right border-secondary">
               <img 
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
                  alt="icon" 
                  style={{width: '50px', filter: 'brightness(0) invert(1)'}}
               />
               <div className="text-left ml-2">
                 <h2 className="m-0 text-white" style={{fontSize: '2rem'}}>{Math.round(weather.main.temp)}°</h2>
               </div>
            </div>
            
            <div className="col-md-4 text-center text-white-50">
               <p className="m-0 text-white text-capitalize">{weather.weather[0].description}</p>
               <small>Humidity: {weather.main.humidity}% • Wind: {weather.wind.speed} m/s</small>
            </div>
          </>
        ) : (
          <div className="col-md-6 text-center text-white">Loading Weather...</div>
        )}
      </div>
    </div>
  );
};

export default Weather;