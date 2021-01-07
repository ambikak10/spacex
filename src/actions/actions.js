import { SET_LANDING, 
  GET_PROGRAMS
} 
  from "./types";
import axios from "axios";

//get programs for landing page
 export const landingPage =  () => (dispatch) => {
   axios
     .get("https://api.spaceXdata.com/v3/launches?limit=100")
     .then((res) => {
      //  console.log(res.data)
       dispatch({
        type: SET_LANDING,
        payload: res.data
      })
    })
     .catch((err) =>{
    //  console.log(err)
     dispatch({
        type: SET_LANDING,
        payload: null
      })
     })
 };
//get programs based on filter
export const filter = (year, value1, value2) => (dispatch) => {
  // console.log("inside filter");
  var params = "";
  if (year) {
    params = params + "&launch_year=" + year;
  }
  if (value1 !== null) {
    params = params + "&launch_success=" + value1;
  }
  if (value2 !== null) {
    params = params + "&land_success=" + value2;
  }
//  console.log(params);
  axios
    .get(`https://api.spaceXdata.com/v3/launches?limit=100${params}`)
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: GET_PROGRAMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({
        type: GET_PROGRAMS,
        payload: null,
      });
    });
};
// //get programs for launch without year
// export const successfulLaunch = (value1) => (dispatch) => {
//   axios
//     .get(
//       `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value1}`
//     )
//     .then((res) =>
//       dispatch({
//         type: GET_LAUNCH,
//         payload: res.data,
//       }).catch((err) =>
//         dispatch({
//           type: GET_LAUNCH,
//           payload: null,
//         })
//       )
//     );
// };

//  //get programs for successful launch with year
//  export const successfulLaunchwithYear = (value1) => (dispatch) => {
//    axios
//      .get(
//        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value1}`
//      )
//      .then((res) =>
//        dispatch({
//          type: GET_LAUNCH,
//          payload: res.data,
//        }).catch((err) =>
//          dispatch({
//            type: GET_LAUNCH,
//            payload: null,
//          })
//        )
//      );
//  };

// //get programs for successful launch and land
//  export const successfulLaunchLand = (value1, value2) => (dispatch) => {
//    axios
//      .get(
//        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value1}&land_success=${value2}`
//      )
//      .then((res) =>
//        dispatch({
//          type: GET_LAUNCH_LAND,
//          payload: res.data,
//        }).catch((err) =>
//          dispatch({
//            type: GET_LAUNCH_LAND,
//            payload: null,
//          })
//        )
//      );
//  };


//get programs for all filters
//  export const all = (value1, value2, year) => (dispatch) => {
//    axios
//      .get(
//        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value1}&land_success=${value2}&launch_year=${year}`
//      )
//      .then((res) =>
//        dispatch({
//          type: GET_ALL,
//          payload: res.data,
//        }).catch((err) =>
//          dispatch({
//            type: GET_ALL,
//            payload: null,
//          })
//        )
//      );
//  };