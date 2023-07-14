import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from './Box';

const korea = [
  { country: 'korea', name: 'gwangju', korean: '광주' },
  { country: 'korea', name: 'daegu', korean: '대구' },
  { country: 'korea', name: 'daejeon', korean: '대전' },
  { country: 'korea', name: 'busan', korean: '부산' },
  { country: 'korea', name: 'seoul', korean: '서울' },
  { country: 'korea', name: 'incheon', korean: '인천' },
];

const weatherKorean = {
  Clear: '맑음',
  Clouds: '흐림',
  Rain: '비',
  Drizzle: '이슬비',
  Thunderstorm: '뇌우',
  Snow: '눈',
  Mist: '안개',
  Haze: '안개',
  Fog: '안개'
};

function App() {
  const [location, setLocation] = useState('');
  const APIKEY = 'fc75625ac3cb0dba6a391eea3c9e64c8';
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIconID, setWeatherIconID] = useState('');
  const [koreanText, setKoreanText] = useState('');
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    if (!location) {
      return;
    } else {
      if (location) {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`;
        axios.get(URL)
          .then(response => {
            const city = response.data.name;
            const sky = response.data.weather[0].main;
            const temp = response.data.main.temp;
            const sunrise = response.data.sys.sunrise;
            const sunset = response.data.sys.sunset;
            const weatherIcon = response.data.weather[0].icon;

            setWeatherData({
              city,
              sky,
              temp,
              sunrise,
              sunset
            });

            setWeatherIconID(weatherIcon);
            setShowIcon(true);
          })
          .catch(error => {
            alert(error);
          });
      }
    }
  }, [location]);

  const sunsetUnixTime = weatherData && weatherData.sunset;
  const sunriseUnixTime = weatherData && weatherData.sunrise;
  const sunsetTime = sunsetUnixTime && new Date(sunsetUnixTime * 1000);
  const sunriseTime = sunriseUnixTime && new Date(sunriseUnixTime * 1000);

  function Icon() {
    const iconURL = `https://openweathermap.org/img/wn/${weatherIconID}@2x.png`;
    return showIcon ? <img src={iconURL} className='img-img' style={{ width: '200px' }} alt="Weather Icon" /> : null;
  }

  function WeaterText() {
    return showIcon ?

      <div className='weather-data'>
        <p>위치</p>
        <p>날씨</p>
        <p>온도</p>
        <p>일출</p>
        <p>일몰</p>
      </div>

      : null;
  }

  return (
    <Box>
      <p className='text-weather'>한국 현재 날씨</p>
      <div className='btn-wrap'>
        {korea.map((country) => (
          <button
            className='btn'
            key={country.name}
            onClick={() => {
              setLocation(country.name);
              setKoreanText(country.korean);
            }}
          >
            {country.korean}
          </button>
        ))}
      </div>

      <div className='weather-data-wrap'>
        {weatherData && (
          <div className='weather-data'>
            <p>{koreanText}</p>
            <p>{weatherKorean[weatherData.sky]}</p>
            <p>{(weatherData.temp - 273.15).toFixed(1)}°C</p>
            <p>{sunriseTime && sunriseTime.toTimeString().slice(0, 5)}</p>
            <p>{sunsetTime && sunsetTime.toTimeString().slice(0, 5)}</p>
          </div>
        )}

        <WeaterText />

        <div className='weather-icon'>
          <Icon />
        </div>

      </div>

    </Box>
  );
}

export default App;
