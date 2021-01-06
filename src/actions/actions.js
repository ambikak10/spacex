import { SET_LANDING, GET_LAUNCH, GET_LAUNCH_LAND, GET_ALL} from "./types";
import axios from "axios";

//get programs for landing page
 export const landingPage =  () => (dispatch) => {
   axios
     .get("https://api.spaceXdata.com/v3/launches?limit=100")
     .then((res) => {
       console.log(res.data)
       dispatch({
        type: SET_LANDING,
        payload: res.data
      })
    })
     .catch((err) =>{
     console.log(err)
     dispatch({
        type: SET_LANDING,
        payload: null
      })
     })
 };

//get programs for successful launch
 export const successfulLaunch = (value1) => (dispatch) => {
   axios
     .get(
       `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value1}`
     )
     .then((res) =>
       dispatch({
         type: GET_LAUNCH,
         payload: res.data,
       }).catch((err) =>
         dispatch({
           type: GET_LAUNCH,
           payload: null,
         })
       )
     );
 };

//get programs for successful launch and land
 export const successfulLaunchLand = (value1, value2) => (dispatch) => {
   axios
     .get(
       `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value1}&land_success=${value2}`
     )
     .then((res) =>
       dispatch({
         type: GET_LAUNCH_LAND,
         payload: res.data,
       }).catch((err) =>
         dispatch({
           type: GET_LAUNCH_LAND,
           payload: null,
         })
       )
     );
 };


//get programs for all filters
 export const all = (value1, value2, year) => (dispatch) => {
   axios
     .get(
       `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value1}&land_success=${value2}&launch_year=${year}`
     )
     .then((res) =>
       dispatch({
         type: GET_ALL,
         payload: res.data,
       }).catch((err) =>
         dispatch({
           type: GET_ALL,
           payload: null,
         })
       )
     );
 };