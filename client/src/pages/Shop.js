import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "./logo.png";
import Blog from "../components/Blog";
import "./Shop.css";
import bald from "./bald.jpg";

const Shop = () => (
    <div>
         <Hero  backgroundImage={bald}> 
     <img className="shoplogo" src={logo} alt={"logo"} style={{ height: 0, flex: 1, width: undefined, padding: 0 }}/>
      <h2 className="shoptitle">A Healthy Outside Starts From The Inside</h2>
    </Hero>
        {/* <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg"> */}
            {/* <img className="shoplogo" src={logo} alt={"logo"} style={{ height: 490, flex: 1, width: undefined, padding: 0 }} />
            <h2>Get Healthy.   Feel Good.</h2> */}
        {/* </Hero> */}
        <Container style={{ marginTop: 40 }}>
            <Row className="text-center"><h1 className="tagline">Shop By Category </h1></Row>
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
             <Blog />
             <Blog />
      
             <Row className="text-center"><h2 className="hey">Reach Your Fit Life Potential!</h2>    
             
             <button className="gsbtn" onClick={this.onSignUp}>GET STARTED NOW</button> 
      </Row>
       
    </div>
);

export default Shop;

