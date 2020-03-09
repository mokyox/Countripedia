// @ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledInput, StyledLabel, Container } from "./styles/styles";
import Results from "./components/Results/";
import CountryStats from "./components/CountryStats/";
import GlobalStyle from "./styles/global/index";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState<string>("");
  const [IsCountryLoaded, setIsCountryLoaded] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  //Get data from Countries API
  useEffect(() => {
    async function fetchCountriesAPIData() {
      let url = "https://restcountries.eu/rest/v2/all";
      await axios
        .get(url)
        .then(response => {
          setCountries(response.data);
          setIsCountryLoaded(true);
        })
        .catch(err => {
          if (err) {
            console.log(err, "Something went wrong. Please try again.");
          }
        });
    }
    fetchCountriesAPIData();
  }, []);

  //Filter through all the countries based on text from input
  const filteredCountries =
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
    <>
      <GlobalStyle></GlobalStyle>
      {IsCountryLoaded && (
        <>
          <Container>
            <h1>Countripedia</h1>
            <form>
              <StyledLabel>Search Countries</StyledLabel>
              <StyledInput
                value={searchCountry}
                onChange={handleCountryChange}
              ></StyledInput>
            </form>
            {filteredCountries.length === 1 ? (
              <CountryStats
                selectedCountry={filteredCountries[0]}
              ></CountryStats>
            ) : (
              ""
            )}
            {filteredCountries.length > 1 ? (
              <Results
                setSelectedCountry={setSelectedCountry}
                filteredCountries={filteredCountries}
                selectedCountry={selectedCountry}
              ></Results>
            ) : (
              ""
            )}
            {!filteredCountries.length && IsCountryLoaded ? (
              <p>No countries found.</p>
            ) : (
              ""
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default App;
