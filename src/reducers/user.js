import { TOGGLE_LOGIN_FORM } from 'src/actions';

const initialState = {
  isOpen: false,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default reducer;
