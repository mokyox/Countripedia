import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Results from "./components/Results";
import CountryStats from "./components/CountryStats";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  //Filter through all the countries based on text from input
  const filteredCountries =
    searchCountry === ""
      ? countries
      : countries.filter(
          country => country.name.toLowerCase().indexOf(searchCountry.toLowerCase()) !== -1
        );
  console.log(filteredCountries);

  //Get data from Countries API
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  //Log values of country every time input value changes
  const handleCountryChange = event => {
    // IDEA: setSelectedCountry([]) Add state that keeps track which country is selected
    setSearchCountry(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countripedia</h1>
        <form>
          Search Countries
          <StyledInput value={searchCountry} onChange={handleCountryChange}></StyledInput>
        </form>
        <section className="results">
          {filteredCountries.length === 1 ? (
            <CountryStats country={filteredCountries[0]}></CountryStats>
          ) : (
            <Results filteredCountries={filteredCountries}></Results>
          )}
          {/* {<Results filteredCountries={filteredCountries}></Results>} */}
        </section>
      </header>
    </div>
  );
};

const StyledInput = styled.input`
  position: relative;
  border-radius: 1000rem;
  padding: 3px;
`;

export default App;
