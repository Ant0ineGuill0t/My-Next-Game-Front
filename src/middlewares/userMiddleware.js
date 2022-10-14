import axios from 'axios';
import {
  LOG_IN,
  GET_USER_DATA,
  UPDATE_USER,
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
  TOGGLE_DONELIST,
  TOGGLE_WISHLIST,
  DISPLAY_WISHLIST,
  DISPLAY_CHECKLIST,
  saveWishlist,
  saveChecklist,
  displayChecklist,
  displayWishlist,
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
          sessionStorage.setItem('token', response.data.token);
          store.dispatch(
            saveUserData(response.data.token),
          );
          store.dispatch(toggleLoginForm());
          store.dispatch(toggleIsLogged());
          store.dispatch(getUserData());
          store.dispatch(displayWishlist());
          store.dispatch(displayChecklist());
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
          if (response.data.user[0] !== 'Erreur dans la complétion du formulaire !') {
            store.dispatch(setValidUserForm());
          }
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
          sessionStorage.removeItem('token');
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case UPDATE_USER:
      console.log(store.getState().user.userData);
      axios.patch(
        `http://localhost:8000/api/user/${store.getState().user.userData.id}/edit`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          withCredentials: true,
          credentials: 'include',
          data: store.getState().user.userData,
        },
      )
        .then(() => {

        })
        .catch((error) => {
          console.log(error);
          console.log(store.getState().user.userData);
        });
      break;
    case GET_USER_DATA:
      axios.get(
        'http://localhost:8000/api/user',
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then((response) => {
          store.dispatch(saveUserDataFromApi(response.data));
          store.dispatch(displayWishlist());
          store.dispatch(displayChecklist());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case TOGGLE_WISHLIST:
      axios.post(
        'http://localhost:8000/api/wishlist/toggle',
        action.data,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(displayWishlist());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case TOGGLE_DONELIST:
      axios.post(
        'http://localhost:8000/api/checklist/toggle',
        action.data,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(displayChecklist());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case DISPLAY_WISHLIST:
      axios.get(
        'http://localhost:8000/api/wishlist',
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then((response) => {
          store.dispatch(saveWishlist(response.data.results));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case DISPLAY_CHECKLIST:
      axios.get(
        'http://localhost:8000/api/checklist',
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then((response) => {
          store.dispatch(saveChecklist(response.data.results));
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
