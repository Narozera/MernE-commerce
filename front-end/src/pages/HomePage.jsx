import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Layout/Hero";
import Categories from "../components/Layout/Categories";
import BestDeals from "../components/Layout/BestDeals";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default HomePage;
