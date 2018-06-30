import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const Contact = () => (
  <div>
    <Container style={{ marginTop: 40 }}>
      <Row>
        <Col size="md-12">
          <h1>About the Fit Life Project</h1>
        </Col>
      </Row>
      
      <Row>
        <Col size="md-12">
        <p>
        Our app is a web-based athlete management software solution. Upon registration and login, user’s arrive at their dashboard. The dashboard has several capabilities (“tabs”): </p>
<p>
Baseline Photos/videos: ie before/after photo and user uploaded movement video (for example them performing an exercise movement)
Goals/objectives: For example, “lose 20lbs before my wedding” or “Improve bench press to 225lbs”.
Key Performance Indicators/ Tests/ Assessment: These are key [quantitative] measurables related to the goals. For example, if the goal is to improve bench press, the biweekly bench press test will be recorded here. Similarly it could be weight, bodyfat, etc.
Workout History/Journal: This is a list of completed workouts with the date/time
The other main page, is the “workout page”, this consists of : </p>
<p>
A header that displays a motivational quote from a .json array
A rendering of the individualized workout for the day in the form of an editable form/table
A video playlist that showcases the exercises associated with the day’s workout
The final feature, is an e-commerce site where individuals can purchase supplements and nutritional products.
</p>
<p>
Value
The value in this site is that it contains everything one needs for a productive/efficient exercise experience and lifestyle. It addresses the learning curve/education component, tracking/measuring of progress, and supplying key nutritional products to support the demands of training and healthy lifestyle. Commonly people don’t know how to get started with exercise or how to properly progress their training. This app supplies users with a wealth of information to get them exercising intelligently and address the knowledge/educational component by providing videos that demonstrate how to do exercises. People are more likely to stick with training when they see the improvement—hence the tracking of key performance indicators. “You can’t manage what you don’t measure” and this aspect is represented here. This is also valuable for trainers and coaches. The app is scalable. In the future different coaches can upload their exercise systems (workout and exercise video library), it give them a chance to market their system and reach a greater client base without having to “trade their time for money”—content is created one time and then users can access it, as opposed to training session where the coach has to be present. Also this allows the coach/trainer to monitor/manage clients by accessing various metrics.

Timeline
FoundationalSet-up: repository; Initial file structure; server/Database; deploy to Heroku; individuals pull (Monday) 
Client login/registration set-up; connect to DB (Tuesday) 
Seed necessary data to DB; DB models/schema (start Tuesday finalize wednesday) 
Finalize Components (wednesday) 
Static page layout and design completed (wednesday) 
Finalize react logic/Testing/troubleshooting (Thursday/Friday) 
Deploy to Heroku -- MVP (Saturday) 

          </p>
        </Col>
      </Row>
      <Row>
      <Col size="md-12">
          <h1>Our Team</h1>
        </Col>
      <Col size="md-6">
        <p> Cecillia Medina</p>
        </Col>
        <Col size="md-6">
        <p> Kimberly Swope</p>
        </Col>
        </Row>
        <Row>
      <Col size="md-6">
        <p> Samantha Olvera</p>
        </Col>
        <Col size="md-6">
        <p>Patrick Francis</p>
        </Col>
        </Row>
        <Row>
      <Col size="md-6">
        <p> Pranav Udayakumar</p>
        </Col>
        </Row>
    </Container>
  </div>
);

export default Contact;
