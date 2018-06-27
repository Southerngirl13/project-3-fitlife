import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
<div>
  
   <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
      <h1>Pupster</h1>
      <h2>They're the Good Boys and Girls</h2>
    </Hero> 
 

    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Pupster!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          Create excellence. Easily.
          Monitor, Understand, Optimize
          Optimize key aspects of your athletes’ preparation 
          and keep them fit, healthy, happy, and ready to win. Cost-effectively. From youth to pro.
          Engage Everyone
          Get the whole team connected as you increase collaboration, communication and compliance for the greater good.
          Gain insight
          Enjoy a dashboard view of everything that counts, featuring evidence-based stats, analysis, alerts, graphs, reports, recommendations, and more.
          Identify issues
          Identify tired and at-risk athletes in real-time and make adequate workload adjustments to minimize the risk of injury and illness.
          Get results
          Keep everyone healthy, working their hardest, happy and motivated, ready to perform at their best.

          </p>
          <p>
          Build winners safely
          Make better coaching decisions by using a holistic approach
          to workload management and injury prevention.

          Centralize everything
Collect and manage athlete data easily, instantly and remotely. Everyone stores and retrieves their data in the same accessible place.

Stay informed and focused
Take advantage of automated analysis, alerts, recommendations & reports to motivate, inform, prevent issues and promote excellence at all levels.
          </p>
          <p>
          Streamline record keeping
Say goodbye to notepads & spreadsheets as you manage athlete data & records online in seconds. Store athlete data, docs, videos, medical records, testing results and more.
Save money
With the AthleteMonitoring.com modular structure you pay only for the features you need, so you can keep your performance program as cost-effective as possible.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
