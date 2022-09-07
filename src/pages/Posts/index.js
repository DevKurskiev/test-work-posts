import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post } from "@components";
import { getPosts } from "@store/posts";
import { PostContainer } from "./styles";

function Posts() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const isLogged = localStorage.getItem("isLogged");

  if (!isLogged) {
    window.location.href = "/";
  }

  useEffect(() => {
    getPosts(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!posts.length) return null;

  return (
    <PostContainer>
      {posts.map((post, i) => (
        <Post {...post} key={i} />
      ))}
    </PostContainer>
  );
}

export default Posts;
