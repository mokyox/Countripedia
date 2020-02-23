export interface Props {
  country: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
}
