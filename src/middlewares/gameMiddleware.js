import axios from 'axios';
import {
  DISPLAY_QUIZZ,
  DISPLAY_NEXT_QUESTION,
  DISPLAY_PREVIOUS_QUESTION,
  displayNextQuestion,
  saveQuestion,
  saveQuizzId,
  saveResults,
  displayQuizz,
  isLoading,
  SEND_ANSWER,
  DISPLAY_RESULTS,
  RESTART_QUIZZ,
} from 'src/actions';
import { setGameFoundFalse, setGameFoundTrue } from '../actions';

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
          store.getState().game.loading = true;
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case RESTART_QUIZZ:
      axios.get(
        'http://localhost:8000/api/quiz/restart',
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
          withCredentials: true,
          credentials: 'include',
        },
      )
        .then(() => {
          store.dispatch(isLoading(!store.getState().game.loading));
          store.dispatch(displayQuizz());
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case DISPLAY_PREVIOUS_QUESTION:
      axios.get(
        `http://localhost:8000/api/quiz/${store.getState().game.idQuiz}/askBack`,
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
        .then(() => {
          store.dispatch(displayNextQuestion());
          console.log(store.getState().game.answerChosen);
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
          console.log(response.map);
          console.log(response.data.results[0].name);
          console.log(response.data.results[1].name);
          console.log(response.data.results[2].name);
          console.log(response.data.results[3].name);
          console.log(response.data.results[4].name);
          console.log(response.data.results[5].name);
          console.log(response.data.results[6].name);
          console.log(response.data.results[7].name);
          console.log(response.data.results[8].name);
          console.log(response.data.results[9].name);
          console.log(response.data.results[10].name);
          console.log(response.data.results[11].name);
          console.log(response.data.results[12].name);
          console.log(response.data.results[13].name);
          console.log(response.data.results[14].name);
          store.dispatch(isLoading(!store.getState().game.loading));
          store.dispatch(saveResults(response));
          if (response.data.results.length < 1) {
            store.dispatch(setGameFoundFalse());
            console.log(store.getState().game.gameFound);
          }
          else {
            store.dispatch(setGameFoundTrue());
          }
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
