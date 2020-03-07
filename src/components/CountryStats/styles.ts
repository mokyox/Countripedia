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

  span {
    margin: 0;
    padding: 0;
    font-size: 16px;

    &:first-of-type {
      margin-bottom: 10px;
      font-size: 18px;
    }

    @media (min-width: 767px) {
      font-size: 20px;
      &:first-of-type {
        font-size: 22px;
      }
    }
  }
`;

export const WeatherIcon = styled.div`
  font-size: 75px;
  margin: 1rem;
`;
