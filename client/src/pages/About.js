import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "./logo.png";
import Blog from "../components/Blog";


const About = () => (
  <div>
    <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
    <img class="logo" src={logo} alt={"logo"} style={{ height: 590, flex: 1, width: undefined, padding: 0 }}/>
      <h2>Get Healthy.   Feel Good.</h2>
    </Hero>
    <Container style={{ marginTop: 40 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Fit Life!</h1>
        </Col>
      </Row>
      
      <Row>
        <Col size="md-12">
        <p>
          Create excellence. Easily.   Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah 
          blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah 
          Blah blah blah Blah blah blah Blah blah blah v
    
 </p>
        </Col>
      </Row>
     {/*} <Row>
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
        </Row>
        */}
        <Row>
        <Col size="md-12">
          <h1>Fit Life Features</h1>
        </Col>
</Row> 
        <Blog />
    </Container>
  </div>
);

export default About;
