import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Filter({ onClick, name }) {
  return (
    <FilterContainer onClick={onClick}>
      {name}
      <Arrow>
        <FontAwesomeIcon icon={faChevronDown} size="xs" />
      </Arrow>
    </FilterContainer>
  );
}

const FilterContainer = styled.button`
  margin-right: 8px;
  padding: 10px 16px;
  background: ${(props) => props.theme.lightGray};
  font-size: 14px;
  border-radius: 5px;

  &:hover {
    background: #dddde1;
  }
`;

const Arrow = styled.span`
  margin-left: 6px;
`;

export default Filter;
