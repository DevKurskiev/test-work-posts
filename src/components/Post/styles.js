import styled from "styled-components";
import { theme } from "@theme";

export const PostItem = styled.div`
  padding: 25px 21px;
  border: 5px solid ${theme.palette.additional};
  border-radius: 6px;
  max-width: 467px;
  margin: ${(props) => props.isMobile && " 0 10px"};
`;

export const PostMainInfo = styled.div`
  display: ${(props) => props.isDesktop && "flex"};
`;

export const PostAvatar = styled.img`
  margin-bottom: 22px;
`;

export const PostNames = styled.div`
  margin-left: ${(props) => props.isDesktop && "30px"};

  p {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 15px;
  }
`;

export const PostTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 15px;
`;

export const PostBody = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 15px;
`;
