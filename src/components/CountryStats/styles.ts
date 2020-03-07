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

  h2,
  img {
    align-self: center;
  }
  img {
    margin: 30px;
  }
  h4 {
    margin: 10px 0;
  }
`;

export const WeatherIcon = styled.div`
  font-size: 75px;
  margin: 1rem;
`;
