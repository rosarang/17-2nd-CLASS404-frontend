import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from "../../Components/Navigation/Navigation";
import UserInfo from "./Components/UserInfo/UserInfo";
import Title from "./Components/Title/Title";
import Aside from "./Components/Aside/Aside";
import { MYPAGE_API } from "../../config";

function MyPage(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [productLikeData, setProductLiikeData] = useState([]);
  const [productBuyData, setProductBuyData] = useState([]);
  const [productCreateData, setProductCreateData] = useState([]);

  useEffect(() => {
    getMyPageData();
  }, []);

  const getMyPageData = () => {
    fetch(MYPAGE_API, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserName(res.userName);
        setUserEmail(res.userEmail);
        setProductLiikeData(res.productLike);
        setProductBuyData(res.productBuy);
        setProductCreateData(res.productCreate);
      });
  };

  return (
    <MyPageContainer>
      <Navigation />
      <MyPageWrapper>
        <UserInfo userName={userName} userEmail={userEmail} />
        <ContentWrapper>
          <Aside />
          <ProductListContainer>
            <Title />
            <ProductList>
              <Product></Product>
              <Product></Product>
              <Product></Product>
            </ProductList>
          </ProductListContainer>
        </ContentWrapper>
      </MyPageWrapper>
    </MyPageContainer>
  );
}

const ProductListContainer = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`;

const MyPageContainer = styled.div``;

const MyPageWrapper = styled.div`
  width: 1176px;
  margin: auto;
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
