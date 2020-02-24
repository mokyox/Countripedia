import styled from "styled-components";

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  margin: 0.5rem auto;
  padding: 1rem;
  p,
  h4 {
    margin: 0.6rem 0;
    padding: 0.5rem 0;
  }
  h1,
  img {
    align-self: center;
  }
`;

export const WeatherIcon = styled.div`
  font-size: 75px;
  margin: 1rem;
`;
