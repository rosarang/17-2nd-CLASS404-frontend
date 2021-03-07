import React from "react";
import styled, { css } from "styled-components";

function User({ onClick, large }) {
  return (
    <UserProfile
      src="/images/profile.png"
      alt="account"
      onClick={onClick}
      large={large}
    />
  );
}

const UserProfile = styled.img`
  width: 40px;
  border-radius: 50%;
  ${(props) =>
    props.large &&
    css`
      width: 56px;
      height: 56px;
    `}
`;

export default User;
