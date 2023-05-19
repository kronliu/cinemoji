import React from 'react';

class AnswerInput extends React.Component {

  render(){
    return (
      <div className="mt-5 container">
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <div>
              <label htmlFor="" className="text-center d-block">Guess</label>
              <input type="text" className="form-control text-center"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default AnswerInput;
