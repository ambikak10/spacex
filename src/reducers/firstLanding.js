import { SET_LANDING, GET_PROGRAMS } from "../actions/types";

const initialState = {
  firstlandPrograms: null,
  filteredPrograms: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LANDING:
      return {
        ...state,
        firstlandPrograms: action.payload,
      };
    case GET_PROGRAMS:
      return {
        ...state,
        filteredPrograms: action.payload,
      };
    default:
      return state;
  }
}
