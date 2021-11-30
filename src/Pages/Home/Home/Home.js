import React from "react";
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import Banner from "../Banner/Banner";


const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default Home;
