import { CHANGE_BACKGROUND } from '../actions';

const initialState = {
  game: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_BACKGROUND:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
