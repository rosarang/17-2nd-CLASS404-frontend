import React from "react";
import styled from "styled-components";

function User({ onClick }) {
  return (
    <UserProfile src="/images/profile.png" alt="account" onClick={onClick} />
  );
}

const UserProfile = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export default User;
