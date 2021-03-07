import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MenuTitle from "../MenuTitle/MenuTitle";
import MenuLink from "../MenuLink/MenuLink";

function Aside() {
  const history = useHistory();

  const menuLink = (link) => history.push(link);

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <AsideContainer>
      <MenuTitle name="수강생" />
      <MenuLink onClick={() => menuLink("/mypage/wish")} name="찜한 클래스" />
      <MenuLink
        onClick={() => menuLink("/mypage/myclass")}
        name="수강 등록한 클래스"
      />
      <Blank />
      <MenuTitle name="크리에이터" />
      <MenuLink
        onClick={() => menuLink("/mypage/creatorclass")}
        name="내가 만든 클래스"
      />
      <Blank />
      <MenuTitle name="메뉴" />
      <MenuLink onClick={logout} name="로그아웃" />
    </AsideContainer>
  );
}

const Blank = styled.div`
  height: 20px;
`;

const AsideContainer = styled.div`
  width: 264px;
  border: 1px solid black;
`;

export default Aside;
