import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Video from "../components/Video";
import Col from "../components/Col";



const Videopage = () => (
    <div>
        <Container>

            <Row className="text-center"><h1 className="firstline">Fit Life Workouts<br /><br /></h1></Row>
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
            <Row>
            <Col size="md-12">
            <Video />
            </Col>
            </Row>
  
        </Container>
    

    </div >
)

export default Videopage;