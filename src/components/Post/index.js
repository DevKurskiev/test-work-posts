import React from "react";

import useWindowDimensions from "@hooks/useWindowDimensions";

import {
  PostItem,
  PostMainInfo,
  PostAvatar,
  PostNames,
  PostTitle,
  PostBody,
} from "./styles";

function Post({ title, body, name, companyName, avatar }) {
  const { isMobile, isDesktop } = useWindowDimensions();

  return (
    <PostItem isMobile={isMobile}>
      <PostMainInfo isDesktop={isDesktop}>
        {!isMobile && <PostAvatar src={avatar} />}
        <PostNames isDesktop={isDesktop}>
          <p>Autor: {name}</p>
          <p>Company: {companyName}</p>
        </PostNames>
      </PostMainInfo>

      <PostTitle>Title: {title}</PostTitle>

      <PostBody>{body}</PostBody>
    </PostItem>
  );
}

export default Post;
