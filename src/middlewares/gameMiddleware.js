import axios from 'axios';
import { DISPLAY_FIRST_QUESTION } from 'src/actions';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DISPLAY_FIRST_QUESTION:
      axios.get(
        'http://cyonefr-server.eddi.cloud/api/quiz',
      )
        .then((response) => {
          console.log('response');
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
  }
  next(action);
};

export default gameMiddleware;
