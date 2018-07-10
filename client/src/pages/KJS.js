import React from "react";


const KJS = () => (

 <div>
working on bmi calculator

 </div>

)
//    }   
// class BMI extends Component {
//   constructor(){
//     super();
  

//     this.state = {
//       heightFeet: '',
//       heightInch: '',
//       weight: '',
//     }
  

//     this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
//     this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
//     this.handleWeightChange = this.handleWeightChange.bind(this);
//     this.calculateBMI = this.calculateBMI.bind(this);
//   }

//   handleHeightFeetChange(event){
//     this.setState({
//       heightFeet: event.target.value
//     });
//   }

//   handleHeightInchChange(event){
//     this.setState({
//       heightInch: event.target.value
//     });
//   }  

//   handleWeightChange(event){
//     this.setState({
//       weight: event.target.value
//     });
//   }

//   calculateBMI(){
//     if (this.state.weight && this.state.heightFeet && this.state.heightInch){
//       // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
//       const INCHES_IN_FEET = 12;

//       let height = Number(this.state.heightFeet);
//           // convert feet to inches
//           height *= INCHES_IN_FEET;
//           // add the inches input field
//           height += Number(this.state.heightInch);

//       let weight = this.state.weight;

//       let bmi = (weight / (height * height)) * 703;
//           bmi = bmi.toFixed(2);
// const Practice = () => (
//   <div>
//     <Container style={{ marginTop: 40 }}>
//       <Row>
//         <Col size="md-12">
//           <h3>Practice Page for Components</h3> 
//           <AssessmentForm />        
//         </Col>
//       </Row>
   
//     </Container>
//   </div>
// );

//       return bmi;
//     }
//   }

//   getBMIResults(bmi){
//     let bmiResults = {
//       label: '',
//       alertClass: '',
//     };
    
//     if (bmi <= 18.5){
//       bmiResults.label = 'Underweight';
//       bmiResults.alertClass = 'alert-danger';
//     } 
//     else if (bmi <= 24.9) {
//       bmiResults.label = 'Normal weight';
//       bmiResults.alertClass = 'alert-success';
//     }
//     else if (bmi <= 29.9){
//       bmiResults.label = 'Overweight';
//       bmiResults.alertClass = 'alert-warning';
//     }
//     else if (bmi >= 30) {
//       bmiResults.label = 'Obesity';
//       bmiResults.alertClass = 'alert-danger';
//     } else {
//       bmiResults.label = 'BMI';
//       bmiResults.alertClass = 'alert-primary';
//     }

//     return bmiResults;
//   }

//   render() {

//     let bmi = this.calculateBMI();
//     let results = this.getBMIResults(bmi);

//     return (
//           <BMI value={[{this.state.heightFeet},{this.state.weight} {this.state.heightInch}]} onChange={this.getBMIResults()}/>
//     );
//   }
// }

// function BmiDisplay(props){
//   return (
//     <div className={"bmi-result alert " + props.alertClass}>
//       <div>{ props.bmi || '--.-' }</div>
//       <div>{ props.label }</div>
//     </div> 
//   )
// }

export default KJS;
