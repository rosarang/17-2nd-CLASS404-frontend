import React from "react";
import styled from "styled-components";

function MenuLink({ name, onClick }) {
  return <MenuContainer onClick={onClick}>{name}</MenuContainer>;
}

const MenuContainer = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
`;

export default MenuLink;
