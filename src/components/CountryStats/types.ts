export interface Props {
  country: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: {
    name: string;
  };
}
