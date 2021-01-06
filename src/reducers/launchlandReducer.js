import { GET_LAUNCH_LAND } from "../actions/types";

const initialState = {
  launchlandPrograms: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LAUNCH_LAND:
      return {
        ...state,
        launchlandPrograms: action.payload,
      };
    default:
      return state;
  }
}
