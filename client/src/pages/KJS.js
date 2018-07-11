import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Video from "../components/Video";
import "./KJS.css";


const Practice = () => (
  <div>
             <h3 className="vidh3" >Practice Page for Components</h3>   
    <Container style={{ marginTop: 40, marginRight: 50 }}>
      <Row>
        <Col size="md-12">
         
        </Col>
      </Row>
    <Video /> 
    </ Container>
    <h3 className="vidh3" >Practice Page for Components</h3>  
    </div>
     );

export default Practice;