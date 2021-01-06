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
          {/* <br/> <br/> */}
          <h4 id='mission-name'>{name}</h4>
          {missionid && missionid.length > 0 ? (
            missionid.map((id) => (
              <Fragment>
                {" "}
                <h5 id='details'>Mission Ids: </h5>
                <ul>
                  <li style={{ marginTop: "-15px", fontSize: "15px" }}>
                    {missionid}
                  </li>
                </ul>
              </Fragment>
            ))
          ) : (
            <h5 id='details'>Mission Ids: </h5>
          )}
          <h5 id='details'>Launch year: {launchyear}</h5>
          {successfullaunch
          && <h5 id='details'>Successful Launch: {successfullaunch}</h5>}
          <h5 id='details'>Successful Landing: {successfullanding}</h5>
        </section>
      </Fragment>
    );
  }
}

export default singleProgram

