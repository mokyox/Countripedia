import styled from "styled-components";

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  margin: 0.5rem auto;
  padding: 1rem;

  & > * {
    margin: 5px 0;
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
