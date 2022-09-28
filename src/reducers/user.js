import { TOGGLE_LOGIN_FORM, CHANGE_FIELD_CREATE_USER } from 'src/actions';

const initialState = {
  isOpen: false,
  userEmail: '',
  userPassword: '',
  userAge: '',
  userConfirmPassword: '',

};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CHANGE_FIELD_CREATE_USER:
      if (action.identifier === 'email') {
        return {
          ...state,
          userEmail: action.value,
        };
      }
      if (action.identifier === 'password') {
        return {
          ...state,
          userPassword: action.value,
        };
      }
      if (action.identifier === 'confirmPassword') {
        return {
          ...state,
          userConfirmPassword: action.value,
        };
      }
      return {
        ...state,
        userAge: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
