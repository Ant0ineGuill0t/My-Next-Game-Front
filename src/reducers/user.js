import {
  TOGGLE_LOGIN_FORM,
  CHANGE_FIELD_CREATE_USER,
  CHANGE_FIELD_USER_LOGIN,
  SAVE_USER_DATA,
  SAVE_USER_DATA_FROM_API,
  SET_ERROR_MESSAGE,
  UNSET_ERROR_MESSAGE,
  TOGGLE_ISLOGGED,
  CLEAR_LOG_STORE,
  SET_ERROR_FORM_MESSAGE,
  UNSET_ERROR_FORM_MESSAGE,
  SET_VALID_USER_FORM,
  UNSET_VALID_USER_FORM,
  EDIT_USER,
  SAVE_WISHLIST,
  SAVE_CHECKLIST,
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
  wishlist: [],
  checklist: [],
  errorMessage: false,
  errorForm: [''],
  validUserForm: false,
  userData: {},
  editUserData: {},
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
    case SAVE_USER_DATA_FROM_API:
      return {
        ...state,
        userData: action.response,
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
    case SET_ERROR_FORM_MESSAGE:
      return {
        ...state,
        errorForm: [...state.errorForm, action.message],
      };
    case UNSET_ERROR_FORM_MESSAGE:
      return {
        ...state,
        errorForm: [''],
      };
    case SET_VALID_USER_FORM:
      return {
        ...state,
        validUserForm: true,
      };
    case UNSET_VALID_USER_FORM:
      return {
        ...state,
        validUserForm: false,
      };
    case EDIT_USER:
      if (action.identifier === 'email') {
        return {
          ...state,
          editUserData: {
            ...state.editUserData,
            email: action.value,
          },
        };
      }
      if (action.identifier === 'pseudo') {
        return {
          ...state,
          editUserData: {
            ...state.editUserData,
            pseudo: action.value,
          },
        };
      }
      if (action.identifier === 'password') {
        return {
          ...state,
          editUserData: {
            ...state.editUserData,
            password: action.value,
          },
        };
      }
      return {
        ...state,
        editUserData: {
          ...state.editUserData,
          confirmPassword: action.value,
        },
      };
    case SAVE_WISHLIST:
      return {
        ...state,
        wishlist: action.wishlist,
      };
    case SAVE_CHECKLIST:
      return {
        ...state,
        checklist: action.checklist,
      };

    default:
      return state;
  }
};

export default reducer;
