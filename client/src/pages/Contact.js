import React from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "./logo.png";
import "./Contact.css";
import kim from "./kim.png";
import sam from "./sam.png";
import pranav from "./pranav.png";
import liftguy from "./liftguy.jpg"


const Contact = () => (
  <div>
      <Hero  backgroundImage={liftguy}> 
     <img className="shoplogo" src={logo} alt={"logo"} style={{ height: 0, flex: 1, width: undefined, padding: 0 }}/>
      <h2 className="shoptitle">The Fit Life Project</h2>
    </Hero>

    <Container style={{ marginTop: 40 }}>
      <Row className="text-center2"><h1>Objectives</h1> </Row>
      <Row>
        <Col size="md-12">
          <p>
            Our app is a web-based athlete management software solution. Upon registration and login, user’s arrive at their dashboard. The dashboard has several capabilities (“tabs”): </p>
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
          <img className="memberimg" src={logo} alt={"logo"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Cecillia Medina</p>
          <div className="membercopy"><p> <li>Sign-In Autentication Logic</li><li>Image Upload Logic</li> </p></div>
          <hr className="memberhr"/>
        </Col>
        <Col id="teamcol" size="md-4">
          <img className="memberimg" src={sam} alt={"sam"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Samantha Olvera</p>
          <div className="membercopy"><p> <li>Assessment & Sign-In Logic</li><li>Front-End Development</li> </p></div>
          <hr className="memberhr"/>
        </Col>
       <Col id="teamcol" size="md-4">
          <img className="memberimg" src={kim} alt={"kim"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Kimberly Swope</p>
          <div className="membercopy"><p> <li>Recipe & Inspiration API Logic</li><li>Front-End Development</li> </p></div>
          <hr className="memberhr"/>
        </Col>
</Row>
<Row>
<Col id="teamcol" size="md-4">
          <img className="memberimg" src={pranav} alt={"pranav"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Pranav Udayakumar</p>
          <div className="membercopy"><p> <li>E-Commerce Store Logic</li><li>Sign-In Authentication Support</li> </p></div>
          <hr className="memberhr"/>
        </Col>
        <Col id="teamcol" size="md-4">
          <img className="memberimg" src={logo} alt={"logo"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Jamar Parham</p>
          <div className="membercopy"><p> <li>React Video Component</li><li>Video Frame Logic</li> </p></div>
          <hr className="memberhr"/>
        </Col>
       <Col id="teamcol" size="md-4">
          <img className="memberimg" src={logo} alt={"logo"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
          <p className="memname">Patrick Francis</p>
          <div className="membercopy"><p> <li>TBD</li><li>TBD</li> </p></div>
          <hr className="memberhr"/>
        </Col>
        
      </Row>
    </Container>
  </div>
);

export default Contact;
