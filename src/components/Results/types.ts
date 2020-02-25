export interface Props {
  filteredCountries: [{ name: string }];
  IsCountryLoaded: boolean;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: {
    name: string;
    capital: string;
    flag: string;
    population: number;
  };
}
