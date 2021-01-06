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
    console.log(successfullanding);
    return (
      <Fragment>
        <section className='program-card'>
          <div className='mission-patch-box'>
            <div>
              {" "}
              <img className='mission-patch' src={img} />
            </div>
          </div>
          <section>
            <p>{name}</p>
          </section>
        </section>
      </Fragment>
    );
  }
}

export default singleProgram

