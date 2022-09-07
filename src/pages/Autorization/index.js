import React from "react";

import useWindowDimensions from "@hooks/useWindowDimensions";
import { AuthForm } from "@components";

function Autorization() {
  const { isMobile } = useWindowDimensions();

  if (localStorage.getItem("isLogged")) window.location.href = "/posts";

  return <AuthForm absolute={!isMobile} isMobile={isMobile} />;
}

export default Autorization;
