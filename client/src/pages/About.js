import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "./logo.png";
import Blog from "../components/Blog";
import "./About.css";
import recipes from "../images/recipes.png";
import workoutvid1 from "../images/workoutvid1.png";
import shop from "../images/shop.png";
import tracker from "../images/tracker.png";
import bald from "./bald.jpg";
import maria from "../images/maria.gif";
import jump from "../images/jump.png";
import { Link } from "react-router-dom";





const About = () => (
  <div>
    <Hero  backgroundImage={bald}> 
     <img className="aboutlogo" src={logo} alt={"logo"} style={{ height: 140, flex: 1, width: undefined, padding: 0 }}/>
      <h2 className="hometitle">Get Healthy.  Feel Good.</h2>
    </Hero>   
    <Container className="container" style={{ marginTop: 40 }}>   
        <Row className="text-center"><h1 className="firstline">Welcome to FitLife!</h1></Row>
      <Row>
        <Col className="notsamep" size="md-12">
        <p className="notpcopy">
          At FitLife, our philosophy is simple. The Fit Life Philosophy is simple. we believe a healthy body makes for a healthier
          Optimize key aspects of your athletes’ preparation and keep them fit, healthy, happy, and ready to win. Cost-effectively. 
       
          </p>
        </Col>
      </Row> 
      
   </Container>
 <Blog />
 {/* <Row className="text-center"><h1 className="firstline">(more explainer text here)</h1></Row>
 <Container>
 <p>
          At Fit Life, our philosophy is simple. The Fit Life Philosophy is simple. we believe a healthy body makes for a healthier....  Nourish. Train. Monitor.Create excellence. Easily.
          Monitor, Understand, Optimize
          Optimize key aspects of your athletes’ preparation 
          and keep them fit, healthy, happy, and ready to win. Cost-effectively. From youth to pro.
          Engage
          </p>
          </Container> */}
 <h1 className="flfeatures">FitLife Features</h1>
      <Container style={{ marginTop: 100 }}>    
      <Row> 
       <Col id="teamcol" size="md-4">
       <img className="pic" src={tracker} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
          <p className="name">TRACKING TOOLS</p>
          <p className="explain">Assess & Monitor<br />Weight & BMI</p>
          <hr />
        </Col>    
        <Col id="teamcol" size="md-4">
         <img className="pic" src={recipes} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
          <p className="name">RECIPE FINDER</p>
          <p className="explain">Search For Recipes That <br />Complement A FitLife </p>
          <hr className="hrabout" />
        </Col>
       <Col id="teamcol" size="md-4">
       <img className="pic" src={workoutvid1} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
       <p className="name">WORKOUT VIDEOS</p>
       <p className="explain">Find & Save Your Favorite <br />Video Workout Routines</p>
          <hr />
        </Col>    
        <Col id="teamcol" size="md-4">
       <img className="pic" src={maria} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
          <p className="name">PHOTO PROGRESSION</p>
          <p className="explain">Upload Photos & Chronicle <br />Your FitLife Progress</p>
          <hr />
        </Col>    
       <Col id="teamcol" size="md-4">
       <img className="pic" src={shop} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
       <p className="name">SHOP FITLIFE</p>
       <p className="explain">Food Made With <br />Simple, Wholesome Ingredients</p>
          <hr />
        </Col>
       <Col id="teamcol" size="md-4">
       <img className="pic" src={jump} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />
          <p className="name">WORKOUT LOG</p>
          <p className="explain">Plan, Organize & Log <br />Your Daily Workouts</p>
          <hr />
        </Col>    
      </Row>
    </Container> 

    <Container>
            <Row className="text-center"><h2 className="hey">Reach Your FitLife Potential!</h2>      
          <button className="gsbtn" onClick={this.onSignUp}><Link className="navbar-brand" to="/signin">START YOUR FITLIFE NOW!</Link></button>    
      </Row>    
      </Container>
  </div> 
);

export default About;
