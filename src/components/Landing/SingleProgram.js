import React, { Component, Fragment } from 'react'
import './landing.css'

class singleProgram extends Component {
  render() {
    const {
      img,
      name,
      missionid,
      launchyear,
      successfullaunch,
      successfullanding,
    } = this.props;
    console.log(name)
    return (
      <Fragment>
        <div className="program-card">
          <img src={img} />
          {name}
        </div>
      </Fragment>
    );
  }
}

export default singleProgram

