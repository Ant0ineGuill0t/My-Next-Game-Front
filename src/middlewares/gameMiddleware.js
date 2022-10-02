import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  DISPLAY_QUIZZ,
  DISPLAY_NEXT_QUESTION,
  displayNextQuestion,
  saveQuestion,
  saveQuizzId,
  displayResults,
  SEND_ANSWER,
  DISPLAY_RESULTS,
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
          const { question, choices, questionNumber } = response.data;
          store.dispatch(saveQuestion(question, choices, questionNumber));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case SEND_ANSWER:
      axios.get(
        `http://localhost:8000/api/quiz/${store.getState().game.idQuiz}/answer/${store.getState().game.answerChosen}`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then((response) => {
          store.dispatch(displayNextQuestion());
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case DISPLAY_RESULTS:
      axios.get(
        'http://localhost:8000/api/game/result',
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
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

export default gameMiddleware;
