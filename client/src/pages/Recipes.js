import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import shakerecipes from "./shakerecipes.png";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";


const Recipes = () => (
    <div>
       
        <Container>
            <Row className="text-center"><h1 className="flfeatures">FitLife Recipe Search<br /></h1> </Row>
           
        </Container>

        <Container>
            <Row>
                <Col id="teamcol" size="md-12">
                    {/* <img className="pic" src={bald} alt={"maria"} style={{ height: undefined, flex: 1, width: 1060, padding: 0 }} />  */}
                </Col>
            </Row>
            <Row>
                <Col is="teamcol" size="md-12">
                    <SearchForm />
                    <br />
                    <br />
                </Col>
            </Row>
            <Row>
                <Col id="teamcol" size="md-12">
                    <img src={shakerecipes} alt={"maria"} style={{ height: undefined, flex: 1, width: 1060, padding: 0 }} />
                    <br />
                    <br />
                    <br />
                    <br />
                </Col>
            </Row>

        </Container>
<Row>       
         <p><a href="https://developer.edamam.com/" target="_blank" rel="noopener noreferrer">Powered by EDAMAM<i className="fa fa-external-link"></i></a></p>  
       </Row>

 <Container>
            <Row className="text-center">  
          <button className="gsbtn" onClick={this.onSignUp}><Link className="navbar-brand" to="/dashboard">BACK TO DASHBOARD</Link></button>    
      </Row>    
      </Container>
      
    </div>
)

export default Recipes;