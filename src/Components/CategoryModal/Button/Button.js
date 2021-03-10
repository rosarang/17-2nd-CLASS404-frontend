import React from "react";
import styled from "styled-components";

function Button({ name, onClick }) {
  return <ButtonContainer onClick={onClick}>{name}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  width: 205px;
  height: 45px;
  border-radius: 5px;
`;

export default Button;
