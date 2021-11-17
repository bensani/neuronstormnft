import React from "react";
import Layout from "../components/Layout";
import RoadMap from "./RoadMap";
import BeforeLunch from "./BeforeLunch";
import NeuronStorm from "./NeuronStorm";
import Header from "./Header";
const Index = () => {
  return (
    <div>
      <Layout>
        <div id="Home">
          <Header />
        </div>
        <div id="Roadmap">
          <RoadMap />
        </div>
        <div id="Concept">
          <BeforeLunch />
        </div>
        <NeuronStorm />
      </Layout>
    </div>
  );
};

export default Index;
