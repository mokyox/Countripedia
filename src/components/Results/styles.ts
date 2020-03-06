import styled from "styled-components";

export const StyledResults = styled.div`
  margin: 0.5 rem auto;
  max-width: 480px;
  text-align: center;
  padding: 1rem;
`;

export const StyledResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  background: #ac5610;
  border: 1px solid #ac5610;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.1s ease-in-out;
  margin: 5px 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;
