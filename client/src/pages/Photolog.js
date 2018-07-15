import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import UploadImage from "../components/UploadImage/UploadImage"
import { Link } from "react-router-dom";


const Photolog = () => (
    <div>

         <Container className="container" style={{ marginTop: 40 }}>   
        <Row className="text-center"><h1 className="firstline">Chronicle Your FitLife Success!</h1></Row>
      <Row>
        <Col size="md-12">
        <p>Upload and save photos of your FitLife Journey</p>
          < UploadImage />
        </Col>
      </Row> 
      
   </Container>
   <Container>
            <Row className="text-center"><h2 className="hey"></h2>      
          <button className="gsbtn" onClick={this.onSignUp}><Link className="navbar-brand" to="/dashboard">BACK TO DASHBOARD</Link></button>    
      </Row>    
      </Container>
         </div> 
);

export default Photolog;