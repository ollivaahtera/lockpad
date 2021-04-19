import { clearCode, setLocked } from './actions';
import { ADD_CODE } from './constants';

const CODE = '1234';

export const logicMiddleware = ({getState, dispatch}) =>
  (next) => (action) => {
    next(action);
      if (action.type === ADD_CODE) {
        const state = getState();
        if (state.code.length >= 4) {
          console.log('Code: ', state.code);
          // check code
          const code = state.code.join('');
          if (code === CODE) {
            dispatch(setLocked(false));
          }
          dispatch(clearCode());
        }
      }
    }