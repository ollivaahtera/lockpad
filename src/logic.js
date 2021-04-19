import { clearCode, setLocked } from './actions';
import { checkCode } from './api/ServerApi';
import { ADD_CODE } from './constants';

export const logicMiddleware = ({getState, dispatch}) =>
  (next) => async (action) => {
    // in this case we can do the next action first and check the result after
    next(action);
    if (action.type === ADD_CODE) {
      const state = getState();
      if (state.code.length >= 4) {
        // 4 codes given, check it from the server
        const code = state.code.join('');
        const result = await checkCode(code);
        if (result === 'OK') {
          dispatch(setLocked(false));
        }
        dispatch(clearCode());
      }
    }
  }