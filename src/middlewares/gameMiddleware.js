import axios from 'axios';
import { DISPLAY_FIRST_QUESTION } from 'src/actions';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DISPLAY_FIRST_QUESTION:
      axios.get(
        'http://cyonefr-server.eddi.cloud/api/quiz',
        {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        },
      )
        .then((response) => {
          console.log(store.getState().user.token);
        })
        .catch((error) => {
          console.log(error);
          console.log(store.getState().user.token);
        });

      break;

    default:
  }
  next(action);
};

export default gameMiddleware;
