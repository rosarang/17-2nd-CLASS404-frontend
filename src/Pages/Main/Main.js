import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ProductsList from "../../Components/ProductList/ProductList";
import Filter from "../../Components/Filter/Filter";
import CategoryModal from "../../Components/CategoryModal/CategoryModal";
import SortingModal from "../../Components/SortingModal/SortingModal";
import Navigation from "../../Components/Navigation/Navigation";
import { PRODUCTLIST_DATA, PRODUCTLIST_API } from "../../config";

function Main() {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [isCategoryModalOn, setIsCategoryModalOn] = useState(false);
  const [isSortingModalOn, setIsSortingModalOn] = useState(false);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [checkedSorting, setCheckedSorting] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, []);

  const getProducts = () => {
    fetch(PRODUCTLIST_DATA, {
      headers: { Authorization: localStorage.getItem("access_token") },
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.product));
  };

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleCategoryModal = () => {
    setIsCategoryModalOn(!isCategoryModalOn);
  };

  const handleSortingModal = () => {
    setIsSortingModalOn(!isSortingModalOn);
  };

  const clearCategory = () => {
    handleCategoryModal();
    setCheckedCategory([]);
    history.push("/");
  };

  const saveSorting = () => {
    handleSortingModal();

    const sortingQuery = "?sort=" + checkedSorting;
    const sortingQuery2 = "&sort=" + checkedSorting;

    const queryString = window.location.search.includes("=")
      ? sortingQuery2
      : sortingQuery;

    history.push(history.location.search + queryString);

    fetch(PRODUCTLIST_API + queryString, {
      headers: { Authorization: localStorage.getItem("access_token") },
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.product));
  };

  const saveCategory = () => {
    handleCategoryModal();

    const categoryQueryExtra = checkedCategory
      .map((id) => "&category=" + id)
      .join()
      .replaceAll(",", "");

    const categoryQueryFirst =
      "?" + categoryQueryExtra.slice(1, categoryQueryExtra.length);

    const queryString = window.location.search.includes("=")
      ? categoryQueryExtra
      : categoryQueryFirst;

    history.push(history.location.search + queryString);

    fetch(PRODUCTLIST_API + history.location.search, {
      headers: { Authorization: localStorage.getItem("access_token") },
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.product));
  };

  const filterProducts = products.filter(
    (product) =>
      product.title.includes(keyword) ||
      product.category.includes(keyword) ||
      product.userName.includes(keyword)
  );

  return (
    <MainContainer>
      {isCategoryModalOn && (
        <CategoryModal
          handleCategoryModal={handleCategoryModal}
          saveCategory={saveCategory}
          checkedCategory={checkedCategory}
          setCheckedCategory={setCheckedCategory}
          clearCategory={clearCategory}
        />
      )}
      {isSortingModalOn && (
        <SortingModal
          handleSortingModal={handleSortingModal}
          saveSorting={saveSorting}
          checkedSorting={checkedSorting}
          setCheckedSorting={setCheckedSorting}
        />
      )}
      <Navigation />
      <MainWrapper>
        <SearchTitle>찾으시는 취미가 있으신가요?</SearchTitle>
        <Search>
          <SearchInput
            type="search"
            placeholder="ex) 미술, 개발, 부동산 "
            onChange={handleSearch}
          />
          <SearchBtn
            src="https://www.flaticon.com/svg/vstatic/svg/149/149852.svg?token=exp=1614775896~hmac=1c913769a5e3889fcf6b437946de1b78"
            alt="search"
          />
        </Search>
        <FilterList>
          <Filter onClick={handleCategoryModal} name="카테고리 설정" />
          <Filter onClick={handleSortingModal} name="정렬" />
        </FilterList>
        <ProductsList products={filterProducts} />
      </MainWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
`;

const MainWrapper = styled.main`
  width: 1176px;
  margin: auto;
`;

const SearchTitle = styled.p`
  padding: 80px 0 50px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 400px;
  margin: auto;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 48px 0 24px;
  background: ${(props) => props.theme.lightGray};
  border: none;
  border-radius: 24px;

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
`;

const SearchBtn = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 20px;
  cursor: pointer;
`;

const FilterList = styled.ul`
  display: flex;
  margin: 32px 0 24px;
`;

export default Main;
