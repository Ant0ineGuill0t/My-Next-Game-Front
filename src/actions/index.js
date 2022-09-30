export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const CHANGE_FIELD_CREATE_USER = 'CHANGE_FIELD_CREATE_USER';
export const CHANGE_FIELD_USER_LOGIN = 'CHANGE_FIELD_USER_LOGIN';
export const LOG_IN = 'LOG_IN';
export const DISPLAY_QUIZZ = 'DISPLAY_QUIZZ';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const DISPLAY_NEXT_QUESTION = 'DISPLAY_NEXT_QUESTION';
export const SAVE_QUIZZ_ID = 'SAVE_QUIZZ_ID';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SEND_ANSWER = 'SEND_ANSWER';
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';

export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM,
});

export const changeFieldCreateUser = (newValue, fieldIdentifier) => ({
  type: CHANGE_FIELD_CREATE_USER,
  value: newValue,
  identifier: fieldIdentifier,
});

export const changeFieldUserLogin = (newValue, fieldIdentifier) => ({
  type: CHANGE_FIELD_USER_LOGIN,
  value: newValue,
  identifier: fieldIdentifier,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const displayQuizz = () => ({
  type: DISPLAY_QUIZZ,
});

export const saveUserData = (token) => ({
  type: SAVE_USER_DATA,
  token: token,
});

export const displayNextQuestion = () => ({
  type: DISPLAY_NEXT_QUESTION,
});

export const saveQuizzId = (idQuiz, sessId) => ({
  type: SAVE_QUIZZ_ID,
  idQuiz: idQuiz,
  sessId: sessId,
});

export const saveQuestion = (question, choices, questionNumber) => ({
  type: SAVE_QUESTION,
  question: question,
  choices: choices,
  questionNumber: questionNumber,
});

export const saveAnswer = (answerChosen) => ({
  type: SAVE_ANSWER,
  answerChosen: answerChosen,
});

export const sendAnswer = () => ({
  type: SEND_ANSWER,
});

export const displayResults = () => ({
  type: DISPLAY_RESULTS,
});
