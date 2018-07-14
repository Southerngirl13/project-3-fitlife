import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



const Photolog = () => (
    <div>

         <Container className="container" style={{ marginTop: 40 }}>   
        <Row className="text-center"><h1 className="firstline">Chronicle Your FitLife Success!</h1></Row>
      <Row>
        <Col size="md-12">
        <p>
          Upload and save photos of your FitLife Journey
          </p>
        </Col>
      </Row> 
      
   </Container>
 
         </div> 
);

export default Photolog;