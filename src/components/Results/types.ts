export interface Props {
  filteredCountries: string[];
  isLoaded: boolean;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
}
