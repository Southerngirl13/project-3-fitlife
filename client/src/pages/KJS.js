


import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Video from "../components/Video";
const Practice = () => (
  <div>
    <Container style={{ marginTop: 40 }}>
      <Row>
        <Col size="md-6">
          <h3>Practice Page for Components</h3>
          <h3>Hi Jamar - Here's Today's Workout</h3>
          <Video />   
          <Video /> 
          <Video /> 
          <Video />       
        </Col>
        <Col size="md-6">
        <div class="panel panel-default">
      <div class="panel-heading">
        <h2>Explosive Strength Workout</h2>
      </div>
      <table class="table table-bordered" id="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Set 1</th>
            <th scope="col">Set 2</th>
            <th scope="col">Set 3</th>
            <th scope="col">Set 4</th>
            <th scope="col">Set 5</th>
            <th scope="col">Set 6</th>
          </tr>
          <tr>
            <th scope="col">Exercise</th>
            <th scope="col">RP x WT</th>
            <th scope="col">RP x WT</th>
            <th scope="col">RP x WT</th>
            <th scope="col">RP x WT</th>
            <th scope="col">RP x WT</th>
            <th scope="col">RP x WT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Clean Pull</th>
            <td>5 x ___</td>
            <td>5 x ___</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Power Clean</th>
            <td>4 x ___</td>
            <td>4 x ___</td>
            <td>4 x ___</td>
            <td>4 x ___</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Bench Press</th>
            <td>5 x ___</td>
            <td>5 x ___</td>
            <td>5 x ___</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Squat</th>
            <td>8 x ___</td>
            <td>6 x ___</td>
            <td>6 x ___</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Pull Up</th>
            <td>8 x ___</td>
            <td>8 x ___</td>
            <td>8 x ___</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">RDL</th>
            <td>10 x ___</td>
            <td>10 x ___</td>
            <td>10 x ___</td>
            <td>10 x ___</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
              <td colspan="7">Comments:</td>
          </tr>
        </tbody>
      </table>
    </div>         
        </Col>
      </Row>
    </ Container>
    </div>
     );
export default Practice;


