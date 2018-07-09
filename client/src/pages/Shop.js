import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import logo from "./logo.png";
import Shopcat from "../components/Shopcat";
import "./Shop.css";
import shakes from "./3shakes.jpg";
import jack9 from "./jack9.gif";

const Shop = () => (
    <div>
        <Hero backgroundImage={shakes}>
            <img className="shoplogo" src={logo} alt={"logo"} style={{ height: 0, flex: 1, width: undefined, padding: 0 }} />
            <h2 className="shoptitle">Summertime Shake-A-Palooza!</h2><img className="aboutlogo" src={logo} alt={"logo"} style={{ height: 70, flex: 1, width: undefined, padding: 0 }} />
        </Hero>
        <Container style={{ marginTop: 40 }}>
            <Row className="specials"><h1 className="tagline">BUY ANY 2 SHAKE PACKS & SAVE </h1> </Row>
            <Row className="shopdetails"><p className="tagline">*see store for details </p> </Row>
            <img className="shakepack" src={jack9} alt={"shakepack"} style={{ height: 320, width: undefined, padding: 0, justifyContent: "center", alignItems: "center"}} />    
        </Container>
        <hr className="shophr"/>
        <Row className="category"><h1 className="tagline">Shop By Category </h1></Row>

        <Shopcat className="shopcat" />
        <hr className="shophr"/>
        <Row className="text-center"><h2 className="hey">Shop All Items</h2>
      
            <button className="gsbtn" onClick={this.onSignUp}>START SHOPPING</button>
        </Row>
    </div>
);

export default Shop;

