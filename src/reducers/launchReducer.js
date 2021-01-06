import { GET_LAUNCH} from "../actions/types";

const initialState = {
  launchPrograms: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LAUNCH:
      return {
        ...state,
        launchPrograms: action.payload,
      };
    default:
      return state;
  }
}
