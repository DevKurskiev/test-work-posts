import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as constants from "@store/constants/index";

import {
  FormContainer,
  FormParent,
  FormItem,
  FormTitle,
  FormInput,
  FormInputLabel,
  FormButton,
} from "./styles";

function AuthForm({ isMobile, absolute }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ login: "", password: "" });

  const handleChangeInputValue = (e, name) => {
    setUserData({ ...userData, [name]: e.target.value });
  };

  const loginToAccount = () => {
    toast.dismiss();

    if (userData.login === "admin" && userData.password === "admin") {
      dispatch({
        type: constants.LOGIN,
        payload: true,
      });

      localStorage.setItem("isLogged", true);
      navigate("/posts");
    } else {
      toast.error("Неправильный логин и/или пароль!");
    }
  };

  return (
    <FormContainer absolute={absolute} isMobile={isMobile}>
      <ToastContainer />
      <FormParent>
        <FormItem>
          <FormTitle isMobile={isMobile}>Autorization</FormTitle>
        </FormItem>

        <FormItem column={isMobile}>
          <FormInputLabel>login </FormInputLabel>
          <FormInput
            value={userData.login}
            onChange={(e) => handleChangeInputValue(e, "login")}
            type="text"
          />
        </FormItem>

        <FormItem column={isMobile}>
          <FormInputLabel>password </FormInputLabel>
          <FormInput
            value={userData.password}
            onChange={(e) => handleChangeInputValue(e, "password")}
            type="text"
          />
        </FormItem>

        <FormItem>
          <FormButton onClick={loginToAccount}>Submit</FormButton>
        </FormItem>
      </FormParent>
    </FormContainer>
  );
}

export default AuthForm;
