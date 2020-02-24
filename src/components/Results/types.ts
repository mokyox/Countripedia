export interface Props {
  filteredCountries: [{ name: string }];
  isLoaded: boolean;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
}
