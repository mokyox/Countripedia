import React from "react";
import Results from "./";
import { render } from "@testing-library/react";

const filteredCountries = [
  { name: "Azerbaijan" },
  { name: "Jamaica" },
  { name: "Japan" },
  { name: "Svalbard and Jan Mayen" }
];

const selectedCountry = {
  name: "Sweden",
  capital: "Stockholm",
  flag: "Swedish Flag",
  population: 9894888,
  languages: [{ name: "Swedish" }]
};

const setSelectedCountry = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation(selectedCountry => [
  selectedCountry,
  setSelectedCountry
]);

//TODO: Fix TS error
//ype 'any[]' is missing the following properties from type '[unknown, Dispatch<unknown>]': 0, 1ts(2739)

describe("<Results />", () => {
  it("renders a <Results /> component", () => {
    const { getByTestId } = render(
      <Results
        filteredCountries={filteredCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    );
    expect(getByTestId("results")).toBeTruthy();
  });
});
