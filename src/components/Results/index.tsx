// @ts-nocheck

import React, { useState } from "react";
import CountryStats from "../CountryStats";
import { Props } from "./types";
import { StyledButton, StyledResult, StyledResults } from "./styles";

const Results: React.FC<Props> = ({
  filteredCountries,
  IsCountryLoaded,
  setSelectedCountry,
  selectedCountry
}) => {
  const [isClicked, setIsClicked] = useState(false);

  //Get API weather data after country API data from parent component is called

  if (filteredCountries.length > 10) {
    return <p> Please specify filter further.</p>;
  }
  if (filteredCountries.length === 0 && IsCountryLoaded) {
    return <p>No countries found.</p>;
  }
  return (
    <>
      <StyledResults>
        <ul>
          {filteredCountries.map(country => (
            <React.Fragment key={country.name}>
              <StyledResult>
                <li>{country.name}</li>
                <StyledButton
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsClicked(!isClicked);
                  }}
                >
                  Display
                </StyledButton>
              </StyledResult>
            </React.Fragment>
          ))}
        </ul>
      </StyledResults>
      {selectedCountry ? (
        <CountryStats selectedCountry={selectedCountry}></CountryStats>
      ) : (
        ""
      )}
    </>
  );
};

export default Results;
