import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Results from "./components/Results/Results";
import CountryStats from "./components/Results/CountryStats/CountryStats";

const App: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  //Get data from Countries API
  useEffect(() => {
    async function fetchCountriesAPIData() {
      let url = "https://restcountries.eu/rest/v2/all";
      await axios.get(url).then(response => {
        setCountries(response.data);
        setIsLoaded(true);
      });
    }
    fetchCountriesAPIData();
  }, []);

  //Filter through all the countries based on text from input
  const filteredCountries: string[] =
    searchCountry === ""
      ? countries
      : countries.filter(
          country =>
            country.name.toLowerCase().indexOf(searchCountry.toLowerCase()) !==
            -1
        );

  //Log values of country every time input value changes
  const handleCountryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchCountry(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countripedia</h1>
        <form>
          <StyledLabel>Search Countries</StyledLabel>
          <StyledInput
            value={searchCountry}
            onChange={handleCountryChange}
          ></StyledInput>
        </form>
        <section className="results">
          {filteredCountries.length === 1 ? (
            <CountryStats
              country={filteredCountries[0]}
              setSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}
            ></CountryStats>
          ) : (
            <Results
              setSelectedCountry={setSelectedCountry}
              filteredCountries={filteredCountries}
              isLoaded={isLoaded}
              selectedCountry={selectedCountry}
            ></Results>
          )}
        </section>
      </header>
    </div>
  );
};

const StyledLabel = styled.p`
  margin: 0.4rem;
`;

const StyledInput = styled.input`
  display: block;
  position: relative;
  border-radius: 1000rem;
  padding: 5px;
  margin: 0.75rem auto;
  max-width: 360px;
`;

export default App;
