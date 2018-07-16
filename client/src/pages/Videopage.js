import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Video from "../components/Video";
import Col from "../components/Col";
import Videogrid from "../components/Videogrid";
import "./Videopage.css";
import { Link } from "react-router-dom";

const Videopage = () => (
    <div>
        <Container>
        <h1 className="flfeatures">FitLife Video Workouts</h1>

            <Row>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://hasfit.com/"
                >
                    Powered by HASFit
    </a>
                <br />
                <br />
            </Row>
            
            <Row className="text-center">
                <Col className="text-center" size="md-12">
                    <Video />
                </Col>
            </Row>
            <Row className="text-center">
                <Col className="text-center" size="md-12">
                    <Videogrid className="jamar" />
                    <Videogrid className="text-center" />
                </Col>
            </Row>
            
            <Row className="text-center">
                <Col className="text-center" size="md-12">
                    <Videogrid className="jamar" />
                    <Videogrid className="text-center" />
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="text-center"><h2 className="hey"></h2>      
          <button className="gsbtn" onClick={this.onSignUp}><Link className="navbar-brand" to="/dashboard">BACK TO DASHBOARD</Link></button>    
      </Row>    
      </Container>

    </div >
)

export default Videopage;