import { TOGGLE_LOGIN_FORM } from '../actions';

const initialState = {
  game: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
