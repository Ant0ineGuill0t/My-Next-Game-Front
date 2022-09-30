import axios from 'axios';
import {
  DISPLAY_QUIZZ,
  DISPLAY_NEXT_QUESTION,
  displayNextQuestion,
  saveQuizzId,
} from 'src/actions';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DISPLAY_QUIZZ:
      axios.get('http://localhost:8000/api/quiz', {
        headers: {
          Authorization: `Bearer ${store.getState().user.token}`,
        },
        withCredentials: true,
        credentials: 'include',
      })
        .then((response) => {
          const idQuiz = response.data.quiz.id;
          const sessId = response.data.sessionId;
          store.dispatch(saveQuizzId(idQuiz, sessId));
          console.log(sessId);
          console.log(response);
          store.dispatch(displayNextQuestion());
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case DISPLAY_NEXT_QUESTION:
      axios.get(
        `http://localhost:8000/api/quiz/${store.getState().game.idQuiz}/ask`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then((response) => {
          console.log(store.getState().game.idQuiz);
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

export default gameMiddleware;
