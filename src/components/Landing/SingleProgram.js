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
          <h5 id='details'>Mission Ids: </h5>
          {missionid && missionid.length > 0 ? (
            missionid.map((id) => (
              <Fragment>
                {" "}
                <ul>
                  <li style={{ marginTop: "-15px", fontSize: "15px" }}>{id}</li>
                </ul>
              </Fragment>
            ))
          ) : (
            <Fragment>
              {" "}
              <span>
                <b id='details'>Mission Ids:</b>
              </span>
              <span style={{ marginLeft: "-10px", fontSize: "0.83em" }}>
                NA
              </span>
            </Fragment>
          )}
          <Fragment>
            {" "}
            <div id='details'>
              <b>Launch Year:</b> <span>{launchyear}</span>
            </div>
          </Fragment>
          {launch === null ? (
            <div id='details'>
              <b>Successful Launch:</b> <span>NA</span>
            </div>
          ) : (
            <div id='details'>
              <b>Successful Launch:</b> <span>{launch.toString()}</span>
            </div>
          )}

          {land === null ? (
            <div id='details'>
              <b>Successful Landing:</b> <span>NA</span>
            </div>
          ) : (
            <div id='details'>
              <b>Successful Landing:</b><span style={{marginLeft:"5px"}}>{land.toString()}</span>
            </div>
          )}
        </section>
      </Fragment>
    );
  }
}

export default singleProgram

