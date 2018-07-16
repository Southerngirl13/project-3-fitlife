import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Herodash from "../components/Herodash";
import "./Dashboard.css";
import foamrolling from "./foamrolling.jpg";
import logo from "./logo.png";
import Dashcard from "../components/Dashcard";



const Dashboard = (props) => (

    <div>
        <Herodash backgroundImage={foamrolling}>
            {/* <img className="dashlogo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} /> */}
            {/* <h1 className="herotitle">Hi Kim. Welcome to Fit Life!</h1> */}
        </Herodash>

        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                    <h1 className="herotitle1">Hi Kim{props.firstName}.</h1><h1 className="welcome">Welcome to FitLife!</h1>
                    <hr className="hr-top" />
                    <p className="titletop">This is where your customized programs live.</p>
                    <p className="subtitle">Simply click on what you want to access. </p>
                    <p className="firstime"><b>TIP:</b>  If you're a first time user, start with the Assessment Form and begin tracking your progress today.</p>
                </Col>
            </Row>
        </ Container>
        <Dashcard />
       
        <Container style={{ marginTop: 40 }}>
           
            <hr className="hr-bottom" />
            <h4 className="h4quote">And Kim,{props.firstName}</h4>
            <p className="pquote">Be Strong. You never know who you're inspiring.</p>
            <p className="signoff">In Good Health,<br />FitLife</p>
            <Row>
            <Col size="md-12">
         <img className="dashlogo2" src={logo} alt={"maria"} style={{ height: undefined, flex: 1, width: 80, padding: 0 }} />
        </Col>
        </Row>
        </Container>
    </div>
);

export default Dashboard;