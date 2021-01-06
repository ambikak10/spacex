import React, { Component, Fragment } from 'react'
import { successfulLaunch } from '../../actions/actions';
import './landing.css'

class singleProgram extends Component {
  render() {
    const {
      img,
      name,
      missionid,
      launchyear,
      launch,
      land,
    } = this.props;
    console.log(land);
    console.log(launch);
    return (
      <Fragment>
        <section className='program-card'>
          <div className='mission-patch-box'>
            <div>
              {" "}
              <img className='mission-patch' src={img} />
            </div>
          </div>
          <h4 id='mission-name'>{name}</h4>
          {missionid && missionid.length > 0 ? (
            missionid.map((id) => (
              <Fragment>
                {" "}
                <h5 id='details'>Mission Ids: NA </h5>
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
          {launch === null ? (
            <h5 id='details'>Successful Launch: NA </h5>
          ) : (
            <h5 id='details'>Successful Launch: {launch.toString()}</h5>
          )}

          {land === null ? (
            <h5 id='details'>Successful Landing: NA </h5>
          ) : (
            <h5 id='details'>Successful Landing: {land.toString()}</h5>
          )}
          {/* <h5 id='details'>Successful Launch: {successfullaunch} </h5>
          <h5 id='details'>Successful Landing: {successfulland} </h5> */}
        </section>
      </Fragment>
    );
  }
}

export default singleProgram

