import React from "react";
import { Header, Features } from "../../containers";
import { ContactBanner } from "../../components";

const Home = () => {
  return (
    <>
      <div className="App gradient__bg-subpage">
        <ContactBanner />
        <Header />
        <Features />
      </div>
    </>
  );
};

export default Home;
