import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "./logo.png";
import Blog from "../components/Blog";
import "./About.css";

import bald from "./bald.jpg";
import maria from "../images/maria.gif";




const About = () => (
  <div>
    <Hero  backgroundImage={bald}> 
     <img className="aboutlogo" src={logo} alt={"logo"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }}/>
      <h2 className="title">Get Healthy.  Feel Good.</h2>
    </Hero>   
    <Container className="container" style={{ marginTop: 40 }}>   
        <Row className="text-center"><h1 className="firstline">Welcome to Fit Life!</h1></Row>
      <Row>
        <Col size="md-12">
        <p>
          At Fit Life, our philosophy is simple. The Fit Life Philosophy is simple. we believe a healthy body makes for a healthier....  Nourish. Train. Monitor.Create excellence. Easily.
          Monitor, Understand, Optimize
          Optimize key aspects of your athletes’ preparation 
          and keep them fit, healthy, happy, and ready to win. Cost-effectively. From youth to pro.
          Engage
          </p>
        </Col>
      </Row> 
      
   </Container>
 <Blog />
 <Row className="text-center"><h1 className="firstline">(more explainer text here)</h1></Row>
 <Container>
 <p>
          At Fit Life, our philosophy is simple. The Fit Life Philosophy is simple. we believe a healthy body makes for a healthier....  Nourish. Train. Monitor.Create excellence. Easily.
          Monitor, Understand, Optimize
          Optimize key aspects of your athletes’ preparation 
          and keep them fit, healthy, happy, and ready to win. Cost-effectively. From youth to pro.
          Engage
          </p>
          </Container>
 <h1 className="flfeatures">Fit Life Features</h1>
      <Container style={{ marginTop: 100 }}>    
      <Row> 
       <Col id="teamcol" size="md-4">
       <img className="pic" src={maria} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
          <p className="name">TRACKING TOOLS</p>
          <p className="explain">Blah blah blah blah blah blah blah blah blah blah</p>
          <hr />
        </Col>    
       <Col id="teamcol" size="md-4">
       <img className="pic" src={maria} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
       <p className="name">WORKOUT VIDEOS</p>
       <p className="explain"> Blah blah blah blah blah blah blah blah blah blah</p>
          <hr />
        </Col>    
         <Col id="teamcol" size="md-4">
         <img className="pic" src={maria} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
          <p className="name">RECIPE FINDER</p>
          <p className="explain">Blah blah blah blah blah blah blah blah blah blah</p>
          <hr className="hrabout" />
        </Col>

       <Col id="teamcol" size="md-4">
       <img className="pic" src={maria} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
       <p className="name">SHOP FIT LIFE</p>
       <p className="explain">Blah blah blah blah blah blah blah blah blah blah</p>
          <hr />
        </Col>

       <Col id="teamcol" size="md-4">
       <img className="pic" src={maria} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
          <p className="name">UPLOAD PHOTOS</p>
          <p className="explain">Upload photos of your progress to stay chronocling your progress with photos</p>
          <hr />
        </Col>    

       <Col id="teamcol" size="md-4">
       <img className="pic" src={maria} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
          <p className="name">FIND INSPIRATION</p>
          <p className="explain">Blah blah blah blah blah blah blah blah blah blah</p>
          <hr />
        </Col>    
      </Row>
    </Container> 
    <Container>
            <Row className="text-center"><h2 className="hey">Reach Your Fit Life Potential!</h2>      
          <button className="gsbtn" onClick={this.onSignUp}>GET STARTED NOW</button> 
      </Row>    
      </Container>
  </div> 
);

export default About;
