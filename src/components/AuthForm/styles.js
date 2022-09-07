import styled from "styled-components";

import { theme } from "@theme";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.isMobile ? "13px" : "22vh 0 0 0")};
`;

export const FormParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;
  /* height: 330px; */
  border: 5px solid ${theme.palette.additional};
  border-radius: 6px;
  padding: ${(props) => (props.isMobile ? "20px 39px" : "48px 19px 20px 19px")};
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: ${(props) => props.column && "column"};
  justify-content: center;
  width: 100%;
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  color: ${theme.palette.additional};
  padding-bottom: ${(props) => (props.isMobile ? "13px" : "40px")};
`;

export const FormInput = styled.input`
  width: 100%;
  max-width: 295px;
  height: 45px;
  border: 5px solid ${theme.palette.additional};
  background: ${theme.palette.another};
  border-radius: 10px;
  margin: 13px 0;
  font-size: 24px;
  padding: 0 5px;
  outline: none;
`;

export const FormInputLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-right: auto;
`;

export const FormButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.palette.primary};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  width: 213px;
  height: 43px;
  cursor: pointer;
`;
