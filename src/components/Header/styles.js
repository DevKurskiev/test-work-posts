import styled from "styled-components";

import { theme } from "@theme";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${theme.palette.primary};
  padding: ${(props) =>
    props.isMobile ? "27px 15px 27px 15px" : "27px 41px 27px 41px"};
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderImg = styled.img`
  max-height: 63px;
  cursor: ${(props) => props.pointer && "pointer"};
`;

export const HeaderUserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding-right: 34px;
`;
