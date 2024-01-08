import styled from "styled-components";

export const BoxInput = styled.aside`
  border: 2px solid #3662e3;
  width: 35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  gap: 10px;
  margin-top: 30px;
  background: #111729;
  @media (max-width: 768px) {
    width: 90vw;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const BtnGenerar = styled.button`
  border: 2px solid #3662e3;
  background: #3662e3;
  color: #f2f5f9;
  padding: 10px 30px;
  border-radius: 8px;
  font-family: "Outfit", sans-serif;
  cursor: pointer;
`;
export const InputText = styled.input`
  width: 70%;
  background: transparent;
  color: #f2f5f9;
  padding: 10px 30px;
  border-radius: 8px;
  font-family: "Outfit", sans-serif;
  outline: none;
    border: none;
  &:focus {
    outline: none;
    border: none;
  }
  &:active {
    outline: none;
    border: none;
  }
  &:focus-visible {
    outline: none;
    border: none;
  }
  &::placeholder {
    color: #364153; /* Puedes cambiar este color según tus preferencias */
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
