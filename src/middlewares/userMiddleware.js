import axios from 'axios';
import {
  LOG_IN,
  GET_USER_DATA,
  saveUserData,
  saveUserDataFromApi,
  toggleLoginForm,
  setErrorMessage,
  toggleIsLogged,
  LOG_OUT,
  clearLogStore,
  SEND_NEW_USER_FORM,
  setValidUserForm,
  getUserData,
} from 'src/actions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios.post(
        'http://localhost:8000/api/login_check',
        {
          username: store.getState().user.userEmail,
          password: store.getState().user.userPassword,
          headers: { 'Content-Type': 'application/json' },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(
            saveUserData(response.data.token),
          );
          store.dispatch(toggleLoginForm());
          store.dispatch(toggleIsLogged());
          store.dispatch(getUserData());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setErrorMessage());
        });

      break;
    case SEND_NEW_USER_FORM:
      axios.post(
        'http://localhost:8000/api/user/new',
        action.data,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(setValidUserForm());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOG_OUT:
      axios.get(
        'http://localhost:8000/logout',
      )
        .then(() => {
          store.dispatch(clearLogStore());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case GET_USER_DATA:
      axios.get(
        'http://localhost:8000/api/user',
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then((response) => {
          store.dispatch(saveUserDataFromApi(response.data));
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
