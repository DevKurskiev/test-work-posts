import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useWindowDimensions from "@hooks/useWindowDimensions";
import * as constants from "@store/constants/index";

import {
  HeaderContainer,
  HeaderItem,
  HeaderImg,
  HeaderUserName,
} from "./styles";
import logo from "@assets/images/logo.png";
import logoMobile from "@assets/images/logo-mob.png";
import exit from "@assets/images/exit.png";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMobile, isDesktop } = useWindowDimensions();

  const logout = () => {
    dispatch({
      type: constants.LOGIN,
      payload: false,
    });

    localStorage.removeItem("isLogged");
    navigate("/");
  };

  return (
    <HeaderContainer isMobile={isMobile}>
      <HeaderItem>
        <HeaderImg src={isMobile ? logoMobile : logo} />
      </HeaderItem>
      {localStorage.getItem("isLogged") && (
        <HeaderItem>
          {isDesktop && <HeaderUserName>Admin</HeaderUserName>}
          <HeaderImg src={exit} onClick={logout} pointer />
        </HeaderItem>
      )}
    </HeaderContainer>
  );
}

export default Header;
