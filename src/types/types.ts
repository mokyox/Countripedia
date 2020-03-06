export interface ResultsProps {
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

export interface CountryStatsProps {
  selectedCountry: {
    name: string;
    capital: string;
    flag: string;
    population: number;
  };
}
