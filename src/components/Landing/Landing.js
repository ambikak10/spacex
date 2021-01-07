import React, { Component, Fragment } from "react";
import { landingPage, filter } from "../../actions/actions";
import "./landing.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SingleProgram from "./SingleProgram";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      filterApplied:false,
      img: null,
      name: null,
      missionid: null,
      launchyear: null,
      launch: null,
      land: null,
      value1: null, //launch boolean value
      value2: null, //land boolena value
    };
  }
  componentDidMount = () => {
    console.log('evertime')
    this.props.landingPage();
  };
//  static getDerivedStateFromProps(props, state){
//      props.filter(state.launchyear, state.value1, state.value2);
//  }
  onFilter = (year, value1, value2) => {
    //console.log(year);
    var params = "";
    if (year !== null) {
      //console.log('year clicked')
      this.setState(
        {
          launchyear: year,
          filterApplied: true
        }, ()=>{
          console.log('callback')
        
          if (this.state.launchyear !== null) {
            console.log(this.state.launchyear);
            params = params + "year=" + this.state.launchyear;
          }

          if (this.state.value1 !== null) {
            console.log(this.state.value1);
            params = params + "launch=" + this.state.value1;
          }
          if (this.state.value2 !== null) {
            console.log(this.state.value2);
            params = params + "land=" + this.state.value2;
          }
             window.history.replaceState(null, null, `/programs/${params}`);
             this.props.filter(
               this.state.launchyear,
               this.state.value1,
               this.state.value2
             );
        }
      );
    }
    if (value1 !== null) {
      this.setState(
        {
          value1: value1,
          filterApplied: true,
        },
        () => {
          //console.log(this.state.value1);
          if (this.state.launchyear !== null) {
            console.log(this.state.launchyear);
            params = params + "year=" + this.state.launchyear;
          }

          if (this.state.value1 !== null) {
            console.log(this.state.value1);
            params = params + "launch=" + this.state.value1;
          }
          if (this.state.value2 !== null) {
            console.log(this.state.value2);
            params = params + "land=" + this.state.value2;
          }
          window.history.replaceState(null, null, `/programs/${params}`);
          this.props.filter(
            this.state.launchyear,
            this.state.value1,
            this.state.value2
          );
        }
      );
    }
    if (value2 !== null) {
      this.setState(
        {
          value2: value2,
          filterApplied: true,
        },
        () => {
          if (this.state.launchyear !== null) {
            console.log(this.state.launchyear);
            params = params + "year=" + this.state.launchyear;
          }

          if (this.state.value1 !== null) {
            console.log(this.state.value1);
            params = params + "launch=" + this.state.value1;
          }
          if (this.state.value2 !== null) {
            console.log(this.state.value2);
            params = params + "land=" + this.state.value2;
          }
          window.history.replaceState(null, null, `/programs/${params}`);
          this.props.filter(
            this.state.launchyear,
            this.state.value1,
            this.state.value2
          );
        }
      );
    }
    //  this.props.filter(this.state.launchyear, this.state.value1, this.state.value2);
  }
  render() {
    console.log('render')
    let content;
    let yearInfo;
    let years;
    let uniqueYears;
    const { firstlandPrograms } = this.props.firstLanding;
    const { filteredPrograms } = this.props.firstLanding;
    
    if (filteredPrograms === null){
    if (firstlandPrograms !== null && firstlandPrograms.length > 0) {
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
    }} else {
      if (filteredPrograms !== null && filteredPrograms.length > 0){
        content = filteredPrograms.map((filteredProgram) => (
          <div className='col-lg-3 col-md-6 col-xl-3 col-sm-12'>
            <SingleProgram
              img={filteredProgram.links.mission_patch_small}
              key={filteredProgram.flight_number}
              name={filteredProgram.mission_name}
              missionid={filteredProgram.mission_id}
              launchyear={filteredProgram.launch_year}
              launch={filteredProgram.launch_success}
              land={filteredProgram.rocket.first_stage.cores[0].land_success}
            />
          </div>
        ));
      }
    }
    if (firstlandPrograms !== null && firstlandPrograms.length > 0) {
      years = firstlandPrograms.map((firstlandProgram) => {
        return firstlandProgram.launch_year;
      });
      uniqueYears = years.filter((year, index) => {
        return years.indexOf(year) == index;
      });

      yearInfo = uniqueYears.map((year) => (
        <div className='col-lg-6 col-xl-6 col-md-6 col-sm-6'>
          <button
            onClick={() => this.onFilter(year, null, null)}
            className='selected'
          >
            {year}
          </button>
        </div>
      ));
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
                <div className='buttons'>{yearInfo}</div>
              </div>

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
                    <button
                      onClick={() => this.onFilter(null, true, null)}
                      className='selected'
                    >
                      True
                    </button>
                  </div>
                  <div
                    className='col-lg-6 col-xl-6 col-md-6 col-sm-6'
                    style={{ marginTop: "-5px", marginBottom: "5px" }}
                  >
                    <button
                      onClick={() => this.onFilter(null, false, null)}
                      className='selected'
                    >
                      False
                    </button>
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
                Successful Landing
                <hr />
              </p>
              <div className='row'>
                <div className='buttons'>
                  <div
                    className='col-lg-6 col-xl-6 col-md-6 col-sm-6'
                    style={{ marginTop: "-5px" }}
                  >
                    <button
                      onClick={() => this.onFilter(null, null, true)}
                      className='selected'
                    >
                      True
                    </button>
                  </div>
                  <div
                    className='col-lg-6 col-xl-6 col-md-6 col-sm-6'
                    style={{ marginTop: "-5px" }}
                  >
                    <button
                      onClick={() => this.onFilter(null, null, false)}
                      className='selected'
                    >
                      False
                    </button>
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

export default connect(mapStateToProps, { landingPage, filter })(Landing);

              