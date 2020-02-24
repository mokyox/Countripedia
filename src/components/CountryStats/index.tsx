// @ts-nocheck
import React, { useState, useEffect } from "react";
import { CountryCard, WeatherIcon } from "./styles";
import axios from "axios";
import getIcon from "./icons";
import { Props } from "./types";

const CountryStats: React.FC<Props> = ({
  country,
  setSelectedCountry,
  selectedCountry
}) => {
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [description, setDescription] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  //setSelectedCountry if there is only 1 result
  if (country) {
    setSelectedCountry(country);
  }
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
          <h1>{country.name}</h1>
          <img src={country.flag} alt="flag"></img>
          <p>
            <strong>Population</strong>:{" "}
            {new Intl.NumberFormat().format(country.population)}
          </p>
          <h4>Languages</h4>
          <ul>
            {country.languages.map(language => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <h4>Weather in {country.capital}</h4>
          <WeatherIcon className={getIcon(icon)}></WeatherIcon>
          <span>
            {description.charAt(0).toUpperCase() + description.slice(1)}
          </span>
          <span>Temperature: {Math.floor(temperature)}°C </span>
          <span>Wind: {Math.floor(wind)} kph</span>
        </CountryCard>
      )}
    </>
  );
};

export default CountryStats;
