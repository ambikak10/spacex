import { combineReducers } from "redux";
import all from "./all";
import launch from "./launchReducer";
import launchLand from "./launchlandReducer";
import firstLanding from "./firstLanding";

export default combineReducers({
  launch: launch,
  launchLand: launchLand,
  all: all,
  firstLanding: firstLanding,
});