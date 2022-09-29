import { TOGGLE_LOGIN_FORM, CHANGE_FIELD_CREATE_USER, CHANGE_FIELD_USER_LOGIN } from 'src/actions';

const initialState = {
  isOpen: false,
  userEmail: '',
  userPassword: '',
  newUserEmail: '',
  newUserPassword: '',
  newUserAge: '',
  newUserConfirmPassword: '',
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
          newUserEmail: action.value,
        };
      }
      if (action.identifier === 'password') {
        return {
          ...state,
          newUserPassword: action.value,
        };
      }
      if (action.identifier === 'confirmPassword') {
        return {
          ...state,
          newUserConfirmPassword: action.value,
        };
      }
      return {
        ...state,
        newUserAge: action.value,
      };
    case CHANGE_FIELD_USER_LOGIN:
      if (action.identifier === 'email') {
        return {
          ...state,
          userEmail: action.value,
        };
      }
      return {
        ...state,
        userPassword: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
