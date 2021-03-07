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
          <ProductList>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </ProductList>
        </ContentWrapper>
      </MyPageWrapper>
    </MyPageContainer>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`;

const MyPageContainer = styled.div``;

const MyPageWrapper = styled.div`
  width: 1176px;
  margin: auto;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: -12px;

  width: 900px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 276px;
  height: 400px;
  margin: 0 12px 40px;
  background-color: black;
  cursor: pointer;
`;

export default MyPage;
