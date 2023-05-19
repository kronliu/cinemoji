import React from 'react';

class ProgressCounters extends React.Component {

  createCounters = () => {
      let allCounters = []

      // Outer loop to create parent
      for (let i = 0; i < 9; i++) {
        allCounters.push(<div className="counter-circle">{i + 1}</div>)
      }
      return allCounters;
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter-container">
              {this.createCounters()}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ProgressCounters;
