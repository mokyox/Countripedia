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

const setSelectedCountry = {}; //How can we mock a setState function?

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
