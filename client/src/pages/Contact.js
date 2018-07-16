import React from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "./logo.png";
import "./Contact.css";
import kim from "./kim.png";
import jamar from "./jamar.png";
import sam from "./sam.png";
import pranav from "./pranav.png";
import cece from "./cece.png";
import liftguy from "./liftguy.jpg"


const Contact = () => (
  <div>
      <Hero backgroundImage={liftguy}> 
     <img className="shoplogo" src={logo} alt={"logo"} style={{ height: 0, flex: 1, width: undefined, padding: 0 }}/>
      <h2 className="shoptitle">The FitLife Project</h2>
    </Hero>
    <Container style={{ marginTop: 40 }}>
      <Row className="text-center22"><h1>Objectives</h1> </Row>
      <Row>
        <Col className="team" size="md-12">
          
          <p>
            Baseline Photos/videos: ie before/after photo and user uploaded movement video (for example them performing an exercise movement)
            Goals/objectives: For example, “lose 20lbs before my wedding” or “Improve bench press to 225lbs”.
            Key Performance Indicators/ Tests/ Assessment: These are key [quantitative] measurables related to the goals. For example, if the goal is to improve bench press, the biweekly bench press test will be recorded here. Similarly it could be weight, bodyfat, etc.
            Workout History/Journal: This is a list of completed workouts with the date/time</p>     
        </Col>
      </Row>
     
      <Row>
        <Col size="md-12">
          <h1 className="ourTeam">Our Team</h1>
        </Col>
</Row>
<Row>
        <Col id="teamcol" size="md-4">
          <img className="memberimg" src={cece} alt={"cece"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Cecillia Medina</p>
          <div className="membercopy"><p> <li>Sign-In Authentication</li><li>Image Upload Page</li> </p></div>
          <hr className="memberhr"/>
        </Col>
        <Col id="teamcol" size="md-4">
          <img className="memberimg" src={sam} alt={"sam"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Samantha Olvera</p>
          <div className="membercopy"><p> <li>Assessment & Sign-In Pages</li><li>Front-End Development</li> </p></div>
          <hr className="memberhr"/>
        </Col>
       <Col id="teamcol" size="md-4">
          <img className="memberimg" src={kim} alt={"kim"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Kimberly Swope</p>
          <div className="membercopy"><p><li>Front-End Development</li><li>Recipe & Nutrition API Pages</li> </p></div>
          <hr className="memberhr"/>
        </Col>
</Row>
<Row>
<Col id="teamcol" size="md-4">
          <img className="memberimg" src={pranav} alt={"pranav"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Pranav Udayakumar</p>
          <div className="membercopy"><p> <li>E-Commerce Storefront</li><li>Sign-In Authentication Support</li> </p></div>
          <hr className="memberhr"/>
        </Col>
        <Col id="teamcol" size="md-4">
          <img className="memberimg" src={jamar} alt={"jamar"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Jamar Parham</p>
          <div className="membercopy"><p> <li>React Video Component</li><li> Page</li> </p></div>
          <hr className="memberhr"/>
        </Col>
       <Col id="teamcol" size="md-4">
          <img className="memberimg" src={logo} alt={"logo"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Patrick Francis</p>
          <div className="membercopy"><p> <li>TBD</li><li>TBD</li> </p></div>
          <hr className="memberhr"/>
        </Col>      
      </Row>
      <Row>
      <p className="specialthanks">Special thanks to the following instructors and TA's for all their help:</p>

          </Row>
    </Container>
  </div>
);

export default Contact;
