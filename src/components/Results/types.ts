export interface Props {
  filteredCountries: [{ name: string }];
  IsCountryLoaded: boolean;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
}
