import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CountryStats = ({ country }) => {
  //Display stats for a country
  return (
    <CountryCard>
      <h1>{country.name}</h1>
      <img src={country.flag} alt="flag"></img>
      <p>Population: {new Intl.NumberFormat().format(country.population)}</p>
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
  /* border: solid 1px red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 480px;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  &p,
  h4,
  li {
    margin: 0.2rem;
  }
`;

CountryStats.propTypes = {
  country: PropTypes.object
};

export default CountryStats;
