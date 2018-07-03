import React from "react";


const BMI = props => {
    let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);

    return (
      <div className="App container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Body Mass Index Calculator</h1>
            <p>Enter your weight and height below.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <legend>Weight</legend>
                <div className="row">
                  <div className="col-xs-12">
                    <input className="form-control" id="bmiWeight" type="number" min="1" max="1000" value={ this.state.weight } onChange={ this.handleWeightChange } />
                    <label className="control-label" htmlFor="bmiWeight">lb</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <legend>Height</legend>
                <div className="row">
                  <div className="col-xs-6">
                    <input className="form-control" id="bmiHeightFeet" type="number" min="1" max="12" value={ this.state.heightFeet } onChange={ this.handleHeightFeetChange } />
                    <label className="control-label" htmlFor="bmiHeightFeet">ft</label>
                  </div>
                  <div className="col-xs-6">
                    <input className="form-control" id="bmiHeightInch" type="number" min="0" max="12" value={ this.state.heightInch } onChange={ this.handleHeightInchChange } />
                    <label className="control-label" htmlFor="bmiHeightInch">in</label>
                  </div>
                </div>
              </div>
            </form>
          </div>

          

        </div>
      </div>
    );
}
  
  export default BMI;