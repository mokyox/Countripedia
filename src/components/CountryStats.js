import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CountryStats = ({ country }) => {
  //Display stats for a country
  return (
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
    </CountryCard>
  );
};

const CountryCard = styled.div`
  border: solid 1px red;
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
