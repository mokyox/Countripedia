import React, { useState } from "react";
import CountryStats from "../CountryStats";
import { ResultsProps } from "../../types/types";
import { StyledButton, StyledResult, StyledResults } from "./styles";

const Results: React.FC<ResultsProps> = ({
  filteredCountries,
  setSelectedCountry,
  selectedCountry
}) => {
  const [isClicked, setIsClicked] = useState(false);

  if (filteredCountries.length > 10) {
    return <p> Please specify filter further.</p>;
  }

  return (
    <>
      <StyledResults data-testid="results">
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
