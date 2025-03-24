import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSaller from "../components/BestSaller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSaller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
