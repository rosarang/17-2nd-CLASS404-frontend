import React from "react";
import styled from "styled-components";
import User from "../../../../Components/User/User";

function UserInfo({ userName, userEmail }) {
  return (
    <UserInfoContainer>
      <Wrapper>
        <User large />
        <Wrap>
          <UserName>{userName}</UserName>
          <UserEmail>{userEmail}</UserEmail>
        </Wrap>
      </Wrapper>
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Wrap = styled.div`
  margin-left: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const UserEmail = styled.p`
  margin-top: 5px;
  margin-left: 2px;
  font-size: 12px;
  color: ${(props) => props.theme.gray};
`;

export default UserInfo;
