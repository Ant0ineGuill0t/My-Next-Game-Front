import {
  TOGGLE_LOGIN_FORM,
  SAVE_QUIZZ_ID,
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
  questionNumber: '',
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
    default:
      return state;
  }
};

export default reducer;
