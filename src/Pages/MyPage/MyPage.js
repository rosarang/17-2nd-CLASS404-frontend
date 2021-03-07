import React from "react";
import styled from "styled-components";
import Aside from "./Components/Aside/Aside";

function MyPage(props) {
  return (
    <MyPageContainer>
      <MyPageWrapper>
        <UserInfo></UserInfo>
        <ContentWrapper>
          <Aside />
        </ContentWrapper>
      </MyPageWrapper>
    </MyPageContainer>
  );
}

const ContentWrapper = styled.div``;

const MyPageContainer = styled.div``;

const MyPageWrapper = styled.div`
  width: 1176px;
  margin: auto;
`;

const UserInfo = styled.div``;

export default MyPage;
