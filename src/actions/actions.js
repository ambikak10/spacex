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
       dispatch({
        type: SET_LANDING,
        payload: res.data
      })
    })
     .catch((err) =>{
     dispatch({
        type: SET_LANDING,
        payload: null
      })
     })
 };
//get programs based on filter
export const filter = (year, value1, value2) => (dispatch) => {
  
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
  axios
    .get(`https://api.spaceXdata.com/v3/launches?limit=100${params}`)
    .then((res) => {
      dispatch({
        type: GET_PROGRAMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PROGRAMS,
        payload: null,
      });
    });
};

