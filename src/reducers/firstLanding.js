import { SET_LANDING } from "../actions/types";

const initialState = {
  firstlandPrograms: null,
};

export default function (state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case SET_LANDING:
      return {
        ...state,
        firstlandPrograms: action.payload,
      };
    default:
      return state;
  }
}
