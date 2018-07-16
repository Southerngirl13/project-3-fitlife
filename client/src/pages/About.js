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
          At FitLife, our philosophy is simple.</p> 
          <br />
          <p>A healthy lifestyle involves both choice and action. <br />The choices you make each day, 
          and the actions you take on those choices, can lead to a healthier lifestyle.<br /> Making positive choices in the areas of 
          nutrition, training and monitoring your progress – and then acting on those choices – promotes a sense of better self-worth, happiness 
          and overall well-being.
          </p>
   
        </Col>
      </Row> 
      
   </Container>
 <Blog />
 
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
       <p className="explain">Enjoy Savings & Special <br />Member Offers On FitLife Products</p>
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
