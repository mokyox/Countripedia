// @ts-nocheck
//TODO: Fix TS errors with selectedCountry types
import React from "react";
import Results from "./";
import { render } from "@testing-library/react";
import { CountryStatsProps } from "../../types/types";

const filteredCountries = [
  { name: "Azerbaijan" },
  { name: "Jamaica" },
  { name: "Japan" },
  { name: "Svalbard and Jan Mayen" },
];

const selectedCountry: CountryStatsProps = {
  name: "Sweden",
  capital: "Stockholm",
  flag: "Swedish Flag",
  population: 9894888,
  languages: [{ name: "Swedish" }],
};

const setSelectedCountry = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((selectedCountry) => [
  selectedCountry,
  setSelectedCountry,
]);

describe("<Results />", () => {
  it("renders a <Results /> component", () => {
    const { getByTestId } = render(
      <Results
        filteredCountries={filteredCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    );
    expect(getByTestId("results")).toMatchSnapshot();
  });
});
