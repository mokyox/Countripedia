export interface CountryStatsProps {
  selectedCountry: {
    name: string;
    capital: string;
    flag: string;
    population: number;
    languages: [{ name: string }];
  };
}

export interface ResultsProps extends CountryStatsProps {
  filteredCountries: [{ name: string }];
  IsCountryLoaded: boolean;
  setSelectedCountry: React.Dispatch<React.SetStateAction<{ name: string }>>;
}
