import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";
import { Autorization, Posts } from "@pages";
import { Header } from "@components";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Autorization />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Fragment>
  );
}

export default App;
