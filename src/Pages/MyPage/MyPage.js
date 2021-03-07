import React from "react";
import styled from "styled-components";
import Navigation from "../../Components/Navigation/Navigation";
import User from "../../Components/User/User";
import Aside from "./Components/Aside/Aside";

function MyPage(props) {
  return (
    <MyPageContainer>
      <Navigation />
      <MyPageWrapper>
        <UserInfo>
          <Wrapper>
            <User large />
            <Wrap>
              <UserName>이사랑</UserName>
              <UserEmail>rosarang@gmail.com</UserEmail>
            </Wrap>
          </Wrapper>
        </UserInfo>
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
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
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
