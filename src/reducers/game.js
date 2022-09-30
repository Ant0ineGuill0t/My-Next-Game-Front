import {
  TOGGLE_LOGIN_FORM,
  SAVE_QUIZZ_ID,
  SAVE_QUESTION,
  SAVE_ANSWER,
} from '../actions';

const initialState = {
  game: '',
  question: '',
  choices: {
    // 'absolument !': 2,
    // 'Un peu': 1,
    // 'Je ne sais pas...': 0,
    // 'Pas vraiment': -1,
    // 'Pas du tout': -2,
  },
  questionNumber: '1',
  answerChosen: '',
  idQuiz: '',
  sessId: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
      };
    case SAVE_QUIZZ_ID:
      return {
        ...state,
        idQuiz: action.idQuiz,
        sessId: action.sessId,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        question: action.question,
        choices: action.choices,
        questionNumber: action.questionNumber,
      };
    case SAVE_ANSWER:
      return {
        ...state,
        answerChosen: action.answerChosen,
      };
    default:
      return state;
  }
};

export default reducer;
