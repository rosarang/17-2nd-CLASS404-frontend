import React from "react";
import styled from "styled-components";

function Title({ title }) {
  return <TitleName>{title}</TitleName>;
}

const TitleName = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export default Title;
