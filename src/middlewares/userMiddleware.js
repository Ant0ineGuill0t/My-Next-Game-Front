import axios from 'axios';
import { LOG_IN, saveUserData, toggleLoginForm } from 'src/actions';

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
