import React from "react";
import styled from "styled-components";

function MyPage(props) {
  return (
    <MyPageContainer>
      <MyPageWrapper></MyPageWrapper>
    </MyPageContainer>
  );
}

const MyPageContainer = styled.div``;

const MyPageWrapper = styled.div`
  width: 1176px;
  margin: auto;
  border: 1px solid black;
`;

export default MyPage;
