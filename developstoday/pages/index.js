import React from "react";
import Posts from "../src/Components/Post";
import Header from "../src/Components/Header";
import Store from "../src/store";

function Home() {
  return (
    <div>
      <Store>
        <Header />
        <Posts />
      </Store>
    </div>
  );
}

export default Home;
