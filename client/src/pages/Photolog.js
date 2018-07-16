import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import UploadImage from "../components/UploadImage"
import { Link } from "react-router-dom";


const Photolog = () => (
    <div>

         <Container className="container" style={{ marginTop: 40 }}>  
         <h1 className="flfeatures">Chronicle Your FitLife Success</h1> 
       
      <Row>
        <Col size="md-12">
        <h3>Upload and save photos of your FitLife Journey!</h3>
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