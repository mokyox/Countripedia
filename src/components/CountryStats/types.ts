export interface Props {
  setSelectedCountry?: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: {
    name?: string;
    capital: string;
    flag?: string;
    population?: number;
  };
  country?: {
    name?: string;
    capital?: string;
    flag?: string;
    population?: number;
    languages?: [{ name: string }];
  };
}
