import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import recipes from "../images/recipes.png";

const Recipes = () => (
    <div>
        <Container>
            <Row className="text-center"><h1 className="firstline">Fit Life Recipe Search <br /><br /></h1></Row>
            <Row >
                <Col size="md-12">
                </Col>
            </Row>
        </Container>
        
        <Container>
            <Row>
                <Col id="teamcol" size="md-4">
                    <img className="pic" src={recipes} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />    
                </Col>
                <Col id="teamcol" size="md-4">
                    <img className="pic" src={recipes} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />      
                </Col>
                <Col id="teamcol" size="md-4">
                    <img className="pic" src={recipes} alt={"maria"} style={{ height: undefined, flex: 1, width: 280, padding: 0 }} />   
                </Col>
            </Row>
        </Container>
    </div>
)



export default Recipes;