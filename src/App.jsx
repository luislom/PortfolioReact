import React from "react";
import Header from "./containers/Header";
import ParticlesContainer from "./containers/ParticlesContainer";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Services from "./containers/Services";

const App = () => {
  return(
    <div className="w-full xl:w-full py-10 lg:py-24 px-5 lg:px-12 pr-4 lg:pr-32">
      <ParticlesContainer/>

      <Header />

      <Home/>

      <About/>

      {/* <Projects/> */}

      <Services/>
    </div>
  );
};

export default App;