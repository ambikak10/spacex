import { GET_ALL } from "../actions/types";

const initialState = {
  allPrograms: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        allPrograms: action.payload,
      };
    default:
      return state;
  }
}
