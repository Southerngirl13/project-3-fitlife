import React, { Component } from "react";
import "./AssessmentForm.css";
import Herodash from "../components/Herodash";
import foamrolling from "./foamrolling.jpg";
import DeleteBtn from "../components/DeleteBtn";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";


class AssessmentForm extends Component {

    state = {
        assessment: [],
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        targetWeight: ""
    };

    componentDidMount() {
        this.loadAssessment();
    }


    loadAssessment() {
        console.log("Assessment Loaded");
        // let assessment = assessment;
        API.getAssessment()
            .then(res => {
                this.setState({ assessment: res.data, firstName: "", lastName: "", age: "", height: "", weight: "", targetWeight: "" });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    getAssessment = () => {
        API.getAssessment()
            .then(res =>
                this.setState({ assessment: res.data, firstName: "", lastName: "", age: "", height: "", weight: "", targetWeight: "" })
            )
            .catch(err => console.log(err));

    };

    deleteAssessment = id => {
        API.deleteAssessment(id)
            .then(res => this.loadAssessment())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        //console.log(event.target);
        console.log(name);
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.age && this.state.gender && this.state.height && this.state.weight && this.state.targetWeight) {
            API.saveAssessment({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                gender: this.state.gender,
                height: this.state.height,
                weight: this.state.weight,
                targetWeight: this.state.targetWeight
            })
                .then(res => this.loadAssessment())
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div>
                <Herodash backgroundImage={foamrolling}>
                    {/* <img className="dashlogo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: undefined, padding: 0 }} /> */}
                    {/* <h1 className="herotitle">Hi Kim. Welcome to Fit Life!</h1> */}
                </Herodash>
          
        <Container>
            <Row className="text-center"><h1 className="flfeaturessam">FitLife Assessment Center<br /></h1> </Row>
         
        </Container>  
            <Container fluid>
                <Row>
                    <Col className="assessmentForm" size="md-6 sm-12">
                        <h3>Complete Your Initial Assessment Below</h3>
                        <form>
                            <Input
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                name="firstName"
                                placeholder="First Name (required)"
                            />
                            <Input
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                name="lastName"
                                placeholder="Last Name (required)"
                            />
                            <Input
                                value={this.state.age}
                                onChange={this.handleInputChange}
                                name="age"
                                placeholder="Age (required)"
                            />
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel> Select Gender</ControlLabel>
                                <FormControl componentClass="select" value={this.state.gender} onChange={this.handleInputChange} name="gender">
                                    <option value="...">...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </FormControl>
                            </FormGroup>
                            <Input
                                value={this.state.height}
                                onChange={this.handleInputChange}
                                name="height"
                                placeholder="Height in Feet/Inches (required)"
                            />
                            <Input
                                value={this.state.weight}
                                onChange={this.handleInputChange}
                                name="weight"
                                placeholder="Weight in lbs. (required)"
                            />
                            <Input
                                value={this.state.targetWeight}
                                onChange={this.handleInputChange}
                                name="targetWeight"
                                placeholder="Target Weight (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.firstName && this.state.lastName && this.state.age && this.state.height && this.state.weight && this.state.targetWeight)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Form
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <div className="assessmentResults">
                        <h3>Completed Assessment:</h3>        {this.state.assessment.length ? (
                            <List>
                                {this.state.assessment.map(assessment => (
                                    <div>
                                        <ListItem key={assessment._id}>
                                            {assessment.firstName} 's current weight: {assessment.weight}. Goal Weight: {assessment.targetWeight} Completed on:{assessment.date}
                                            <DeleteBtn onClick={() => this.deleteAssessment(assessment._id)} />
                                        </ListItem>
                                    </div>
                                ))}
                            </List>
                        ) : (
                                <h6>No Completed Assessments!!!</h6>)}
                                </div>
                    </Col>
                </Row>
            </Container>

<Container>
    <Row>
    
  <div className="BMI">
    <iframe src="https://bmicalculatorusa.com/widgets/widget.php?t=550x480" width="550" height="480" frameBorder="0"></iframe>      
      </div>
      </Row>

      </Container>


            </div>
        );
    }
}

export default AssessmentForm;