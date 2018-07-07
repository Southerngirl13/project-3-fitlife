import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "./logo.png";
import Blog from "../components/Blog";
import "./About.css";
import bald from "./bald.jpg";



const About = () => (
  <div>
    <Hero  backgroundImage={bald}> 
     <img className="aboutlogo" src={logo} alt={"logo"} style={{ height: 220, flex: 1, width: undefined, padding: 0 }}/>
      <h2 className="title">Get Healthy.  Feel Good.</h2>
    </Hero>

     {/* <Hero backgroundImage="bald.jpg" className="bald" src={bald}>
    <img className="aboutlogo" src={logo} alt={"logo"} style={{ height: 490, flex: 1, width: undefined, padding: 0 }}/>
      <h2>Get Healthy.  Feel Good.</h2>
    </Hero> */}
    
    <Container className="container" style={{ marginTop: 40 }}>
     
        <Row className="text-center"><h1 className="firstline">Welcome to Fit Life!</h1></Row>
       
      <Row>
        <Col size="md-12">
        <p>
          At Fit Life, we believe a healthy body makes for a healthier....  Nourish. Train. Monitor.Create excellence. Easily.
          Monitor, Understand, Optimize
          Optimize key aspects of your athletes’ preparation 
          and keep them fit, healthy, happy, and ready to win. Cost-effectively. From youth to pro.
          Engage Everyone blah blah
          </p>
          {/* <p>
          Get the whole team connected as you increase collaboration, communication and compliance for the greater good.
          Gain insight
          Enjoy a dashboard view of everything that counts, featuring evidence-based stats, analysis, alerts, graphs, reports, recommendations, and more.
          Identify issues
          Identify tired and at-risk athletes in real-time and make adequate workload adjustments to minimize the risk of injury and illness.
          Get results
          Keep everyone healthy, working their hardest, happy and motivated, ready to perform at their best.
############
         
          Build winners safely
          Make better coaching decisions by using a holistic approach
          to workload management and injury prevention.  blah blah

          Centralize everything
Collect and manage athlete data easily, instantly and remotely. Everyone stores and retrieves their data in the same accessible place.

Stay informed and focused
Take advantage of automated analysis, alerts, recommendations & reports to motivate, inform, prevent issues and promote excellence at all levels.
         
          Streamline record keeping
Say goodbye to notepads & spreadsheets as you manage athlete data & records online in seconds. Store athlete data, docs, videos, medical records, testing results and more.
Save money
With the AthleteMonitoring.com modular structure you pay only for the features you need, so you can keep your performance program as cost-effective as possible.
          </p> */}
        </Col>
      </Row>
      {/* <Row>
      <Col size="md-6">
        <p> This is App Feature #1</p>
        </Col>
        <Col size="md-6">
        <p> This is App Feature #2</p>
        </Col>
        </Row>
        <Row>
      <Col size="md-6">
        <p> This is App Feature #3</p>
        </Col>
        <Col size="md-6">
        <p>This is App Feature #4</p>
        </Col>
        </Row>
        <Row>
      <Col size="md-6">
        <p> This is App Feature #5</p>
        </Col>
        <Col size="md-6">
        <p>This is App Feature #6</p>
        </Col>
        </Row> */}
   </Container>
   <Container className="KJS">
        <Blog />
        <Row className="text-center"><h2 className="hey">Reach Your Fit Life Potential!</h2>      
          <button className="gsbtn" onClick={this.onSignUp}>GET STARTED NOW</button> 
      </Row>
      </Container>
  </div>
);

export default About;
