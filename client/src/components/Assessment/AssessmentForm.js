// import React { Component } from "react";

// class AssessmentForm extends Component {
//     state = {

//     };

//     handleBtnClick = event => {
//         event.preventDefault();
//         API.getNewAssessmentResults(this.state.AssessmentForm)
//             .then(res => {
//                 if (res.data.status === "error") {
//                     throw new Error(res.data.message);
//                 }
//                 this.setState({ results: res.data.message, error: "" });
//             })
//             .catch(err => this.setState({ error: err.message }));
//     };
// }


// render() {
//     return (
//         <div className="assessmentForm">
//             <form action="/action_page.php">
//                 <div className="dropdown">
//                     <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Your Sex
//                     <span className="caret"></span></button>
//                     <ul className="dropdown-menu">
//                         <li><a href="#">Male</a></li>
//                         <li><a href="#">Female</a></li>
//                         <li><a href="#">Other</a></li>
//                     </ul>
//                 </div>
//                 <div className="form-group">
//                     <label for="height">Height:</label>
//                     <input type="height" className="form-control" id="height" />
//                 </div>
//                 <div className="form-group">
//                     <label for="weight">Weight:</label>
//                     <input type="weight" className="form-control" id="weight" />
//                 </div>
//                 <div className="form-group">
//                     <label for="waistMeasurement">Waist Measurement:</label>
//                     <input type="waistMeasurement" className="form-control" id="waistMeasurement" />
//                 </div>
//                 <button type="submit" className="btn btn-default">Submit</button>
//             </form>
//         </div>
//     )
// };

// export default AssessmentForm;
