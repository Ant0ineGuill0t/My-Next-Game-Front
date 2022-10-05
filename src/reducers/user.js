import {
  TOGGLE_LOGIN_FORM,
  CHANGE_FIELD_CREATE_USER,
  CHANGE_FIELD_USER_LOGIN,
  SAVE_USER_DATA,
  SET_ERROR_MESSAGE,
  UNSET_ERROR_MESSAGE,
  TOGGLE_ISLOGGED,
  CLEAR_LOG_STORE,
} from 'src/actions';

const initialState = {
  isOpen: false,
  userEmail: '',
  userPseudo: '',
  userPassword: '',
  newUserEmail: '',
  newUserPseudo: '',
  newUserPassword: '',
  newUserAge: '',
  newUserConfirmPassword: '',
  token: '',
  isLogged: false,
  errorMessage: false,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case TOGGLE_ISLOGGED:
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    case CHANGE_FIELD_CREATE_USER:
      if (action.identifier === 'email') {
        return {
          ...state,
          newUserEmail: action.value,
        };
      }
      if (action.identifier === 'pseudo') {
        return {
          ...state,
          newUserPseudo: action.value,
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
    case SAVE_USER_DATA:
      return {
        ...state,
        token: action.token,
        isLogged: action.islogged,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: true,
      };
    case UNSET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: false,
      };
    case CLEAR_LOG_STORE:
      return {
        ...state,
        userEmail: '',
        userPassword: '',
        token: '',
      };
    default:
      return state;
  }
};

export default reducer;
