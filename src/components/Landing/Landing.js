import React, { Component, Fragment } from "react";
import { landingPage } from "../../actions/actions";
import "./landing.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SingleProgram from "./SingleProgram";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      componentUpdate: false,
      img: null,
      name: null,
      missionid: null,
      launchyear: null,
      launch: null,
      land: null,
      value1: '', //launch boolean value
      value2: ''  //land boolena value
    };
  }
  componentDidMount = () => {
    this.props.landingPage();
  };

  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  launchYear = (year) => {
    console.log(year)
    this.setState({
     launchyear: year
    })
  };
  render() {
    let content;
    let yearInfo;
    let years;
    let uniqueYears;
    const { firstlandPrograms } = this.props.firstLanding;

    if (
      firstlandPrograms !== null &&
      firstlandPrograms.length > 0 &&
      this.state.componentUpdate === false
    ) {
      content = firstlandPrograms.map((firstlandProgram) => (
        <div className='col-lg-3 col-md-6 col-xl-3 col-sm-12'>
          <SingleProgram
            img={firstlandProgram.links.mission_patch_small}
            key={firstlandProgram.flight_number}
            name={firstlandProgram.mission_name}
            missionid={firstlandProgram.mission_id}
            launchyear={firstlandProgram.launch_year}
            launch={firstlandProgram.launch_success}
            land={firstlandProgram.rocket.first_stage.cores[0].land_success}
          />
        </div>
      ));
    } else {

    }
    if(firstlandPrograms !== null && firstlandPrograms.length > 0){
     years = firstlandPrograms.map(firstlandProgram => {
      return firstlandProgram.launch_year
     });
     uniqueYears = years.filter((year, index) =>{
        return years.indexOf(year) == index;
     })
    
     yearInfo = uniqueYears.map((year) => 
       <div className='col-lg-6 col-xl-6 col-md-6 col-sm-6'>
         <Link
           to='#'
           type='button'
           onClick={() => this.launchYear(year)}
           className='selected'
         >
           {year}
         </Link>
       </div>
     )
     //console.log(uniqueYears);
    }       
    return (
      <Fragment>
        <h2 style={{ marginLeft: "10px", marginTop: "0px" }}>
          SpaceX Launch Programs
        </h2>
        <div className='row'>
          <div className='col-lg-2 col-xl-2 col-md-4 col-sm-12'>
            <section className='selection-box'>
              <p style={{ marginLeft: "10px", fontWeight: "bold" }}>Filters</p>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "-10px",
                }}
              >
                Launch Year
                <hr />
              </p>
              <div className='row'>
                <div className='buttons'>
                  {yearInfo}
                </div>
              </div>

              {/* // <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2007
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2008
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2009
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2010
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2011
                  //   </Link>{" "}
                  // </div>{" "}
                  // <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2012
                  //   </Link>
                  // </div>{" "}
                  // <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2013
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-xl-6 col-sm-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2014
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-xl-6 col-sm-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2015
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-xl-6 col-sm-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2016
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-xl-6 col-sm-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2017
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-md-6 col-xl-6 col-sm-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2018
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-xl-6  col-md-6 col-sm-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2019
                  //   </Link>
                  // </div>
                  // <div className='col-lg-6 col-xl-6 col-md-6 col-sm-6'>
                  //   <Link to='#' type='button' className='selected'>
                  //     2020
                  //   </Link>
                  // </div> */}

              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "-10px",
                  clear: "both",
                }}
              >
                Successful Launch
                <hr />
              </p>
              <div className='row'>
                <div className='buttons'>
                  <div
                    className='col-lg-6 col-xl-6 col-md-6 col-sm-6'
                    style={{ marginTop: "-5px" }}
                  >
                    <Link to='#' type='button' className='selected'>
                      True
                    </Link>
                  </div>
                  <div
                    className='col-lg-6 col-xl-6 col-md-6 col-sm-6'
                    style={{ marginTop: "-5px", marginBottom: "5px" }}
                  >
                    <Link to='#' type='button' className='selected'>
                      False
                    </Link>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Succussful Landing
                <hr />
              </p>
              <div className='row'>
                <div className='buttons'>
                  <div
                    className='col-lg-6 col-xl-6 col-md-6 col-sm-6'
                    style={{ marginTop: "-5px" }}
                  >
                    <Link to='#' type='button' className='selected'>
                      True
                    </Link>
                  </div>
                  <div
                    className='col-lg-6 col-xl-6 col-md-6 col-sm-6'
                    style={{ marginTop: "-5px" }}
                  >
                    <Link to='#' type='button' className='selected'>
                      False
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className='col-lg-10 col-xl-10 col-md-8 col-sm-12'>
            <div className='row'>{content}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  firstLanding: state.firstLanding,
});

export default connect(mapStateToProps, { landingPage })(Landing);
