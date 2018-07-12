import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Herodash from "../components/Herodash";
import "./Dashboard.css";
import foamrolling from "./foamrolling.jpg";
import logo from "./logo.png";

import Dashcard from "../components/Dashcard";
const Dashboard = () => (





const Dashboard = (props) => (


    <div>
        <Herodash backgroundImage={foamrolling}>
            {/* <img className="dashlogo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} /> */}
            {/* <h1 className="herotitle">Hi Kim. Welcome to Fit Life!</h1> */}
        </Herodash>

        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">

                    <h1 className="herotitle1">Hi Kim.</h1><h1 className="welcome">Welcome to Fit Life!</h1>
                    <hr className="hr-top" />

                    <h1 className="herotitle1">Hi {props.firstName}.</h1><h1 className="welcome">Welcome to Fit Life!</h1>
                    <hr className="hr-text" />

                    <p className="titletop">This is where your customized programs live.</p>
                    <p className="subtitle">Simply click on what you want to access. </p>
                </Col>
            </Row>
        </ Container>
<Dashcard />
      
       


        <Container style={{ marginTop: 15 }}>         
            <hr className="hr-bottom" />
            <h4 className="h4quote">And Kim,</h4>

        <Container style={{ marginTop: 40 }}>
            <Row>
                <Col size="md-4">
                    <p className="dashh3"><br />
                        <img className="logo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} />
                    </p>
                    <p><a className="wtfisthis" href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">GO TO RECIPES NOW!<i className="fa fa-external-link"></i></a></p>
                </Col>
                <Col size="md-4">
                    <p className="dashh3"><br />
                        <img className="logo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} />
                    </p>
                    <p><a className="wtfisthis" href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">GO TO RECIPES NOW!<i className="fa fa-external-link"></i></a></p>
                </Col>
                <Col size="md-4">
                    <p className="dashh3"><br />
                        <img className="logo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} />
                    </p>
                    <p><a className="wtfisthis" href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">GO TO RECIPES NOW!<i className="fa fa-external-link"></i></a></p>
                </Col>
            </Row>
        </ Container>

        <Container style={{ marginTop: 40 }}>
            <Row>
                <Col size="md-4">
                    <p className="dashh3"><br />
                        <img className="logo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} />
                    </p>
                    <p><a className="wtfisthis" href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">GO TO RECIPES NOW!<i className="fa fa-external-link"></i></a></p>
                </Col>
                <Col size="md-4">
                    <p className="dashh3"><br />
                        <img className="logo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} />
                    </p>
                    <p><a className="wtfisthis" href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">GO TO RECIPES NOW!<i className="fa fa-external-link"></i></a></p>
                </Col>
                <Col size="md-4">
                    <p className="dashh3"><br />
                        <img className="logo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} />
                    </p>
                    <p><a className="wtfisthis" href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">GO TO RECIPES NOW!<i className="fa fa-external-link"></i></a></p>
                </Col>
            </Row>
            <hr className="hr-text" />
            <h4 className="h4quote">And {props.firstName},</h4>

            <p className="pquote">Be Strong Today. You never know who you're inspiring.</p>
            <p className="signoff">In Good Health,<br />Fit Life</p>
            <Row>
                <Col size="md-12">
                    <img className="dashlogo2" src={logo} alt={"maria"} style={{ height: undefined, flex: 1, width: 80, padding: 0 }} />
                </Col>
            </Row>
        </Container>
      
    </div>
);

export default Dashboard;