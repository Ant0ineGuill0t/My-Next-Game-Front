import axios from 'axios';
import { LOG_IN } from 'src/actions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios.get(
        'http://cyonefr-server.eddi.cloud/api/login_check/',
        {
          username: store.getState().user.userEmail,
          password: store.getState().user.userPassword,
        },
        console.log('requête envoyée'),
      )
        .then((response) => {
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
