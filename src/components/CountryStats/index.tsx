import React, { useState, useEffect } from "react";
import { CountryCard, WeatherIcon } from "./styles";
import axios from "axios";
import getIcon from "./icons";
import { CountryStatsProps } from "../../types/types";

const CountryStats: React.FC<CountryStatsProps> = ({ selectedCountry }) => {
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [description, setDescription] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  //Get weather data from API
  useEffect(() => {
    async function fetchWeatherAPIData() {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital}&appid=${API_KEY}&units=metric`;
      await axios
        .get(url)
        .then(response => {
          setIcon(response.data.weather[0].icon);
          setTemperature(response.data.main.temp);
          setWind(response.data.wind.speed);
          setDescription(response.data.weather[0].description);
        })
        .catch(err => {
          if (err) {
            console.log(err, "Something went wrong. Please try again.");
          }
        });
    }
    fetchWeatherAPIData();
  }, [API_KEY, selectedCountry.capital, setWeather]);

  return (
    <>
      {weather && (
        <CountryCard>
          <h2>{selectedCountry.name}</h2>
          <img src={selectedCountry.flag} alt="flag"></img>
          <h4>Population</h4>
          <p>{new Intl.NumberFormat().format(selectedCountry.population)}</p>
          <h4>Languages</h4>
          <ul>
            {selectedCountry.languages.map(language => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          {selectedCountry.capital ? (
            <>
              <h4>Weather in {selectedCountry.capital}</h4>
              <WeatherIcon className={getIcon(icon)}></WeatherIcon>
              <span>
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </span>
              <span>Temperature: {Math.floor(temperature)}°C </span>
              <span>Wind: {Math.floor(wind)} kph</span>
            </>
          ) : (
            <>
              <h4>
                Cannot get current weather at this time. Please try again later.
              </h4>
            </>
          )}
        </CountryCard>
      )}
    </>
  );
};

export default CountryStats;
