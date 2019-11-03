import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";

const CountryStats = ({ country, setSelectedCountry, selectedCountry }) => {
  const [weather, setWeather] = useState([]);
  //API Key
  const API_KEY = process.env.REACT_APP_API_KEY;

  //setSelectedCountry if there is only 1 result
  if (country) {
    setSelectedCountry(country);
    console.log(selectedCountry, "SELECTEDCOUNTRY");
  }

  console.log(selectedCountry);

  //Get weather data from API
  useEffect(() => {
    async function fetchWeatherAPIData() {
      let url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${selectedCountry.capital}`;
      await axios
        .get(url)
        .then(response => {
          setWeather(response.data.current);
        })
        .catch(err => {
          if (err) {
            console.log(err, "This is an error.");
          }
        });
    }
    fetchWeatherAPIData();
  }, [API_KEY, selectedCountry.capital, setWeather]);

  console.log(weather);

  return (
    <>
      {weather && (
        <CountryCard>
          <h1>{country.name}</h1>
          <img src={country.flag} alt="flag"></img>
          <p>
            <strong>Population</strong>: {new Intl.NumberFormat().format(country.population)}
          </p>
          <h4>Languages</h4>
          <ul>
            {country.languages.map(language => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <h4>Weather in {country.capital}</h4>
          {/* Map over weather array and populate card with all the information */}
          <p>Temperature: {weather.temperature}°C</p>
          <img
            style={{ width: "50px", height: "50px", alignSelf: "flex-start" }}
            src={weather.weather_icons}
            alt=" current weather icon"
          ></img>
          <p>
            Wind: {weather.wind_speed} kph direction {weather.wind_dir}{" "}
          </p>
        </CountryCard>
      )}
    </>
  );
};

const CountryCard = styled.div`
  /* border: solid 1px red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  margin: 0.5rem auto;
  padding: 1rem;
  p,
  h4 {
    margin: 0.6rem 0;
    padding: 0.5rem 0;
  }
  h1,
  img {
    align-self: center;
  }
`;

CountryStats.propTypes = {
  country: PropTypes.object
};

export default CountryStats;
