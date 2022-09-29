import axios from 'axios';
import { LOG_IN } from 'src/actions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios.post(
        'http://cyonefr-server.eddi.cloud/api/login_check',
        {
          username: store.getState().user.userEmail,
          password: store.getState().user.userPassword,
          headers: { 'Content-Type':'application/json'},
        },
      )
        .then((response) => {
          
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
