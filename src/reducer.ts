import { ADD_CODE, CLEAR_CODE, SET_LOCKED } from "./constants";

export interface IAppState {
  code: number[];
  locked: boolean;
}

const initialState = {
  code: [],
  locked: true
};

const rootReducer = (state = initialState, action: any) => {
  if (action.type ===  ADD_CODE) {
    return Object.assign({}, state, {
      code: state.code.concat(action.payload)
    });
  }
  if (action.type ===  CLEAR_CODE) {
    return {
      code: [],
      locked: state.locked
    };
  }
  if (action.type === SET_LOCKED) {
    return Object.assign({}, state, {
      locked: action.payload
    });
  }
  return state;
};

export default rootReducer;