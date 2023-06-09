import {
  TOGGLE_LOGIN_FORM,
  SAVE_QUIZZ_ID,
  SAVE_QUESTION,
  SAVE_ANSWER,
  SAVE_RESULTS,
  RESTART_QUIZZ,
  IS_LOADING,
  SET_GAMEFOUND_FALSE,
  SET_GAMEFOUND_TRUE,
} from '../actions';

const initialState = {
  game: '',
  question: '',
  loading: true,
  gameFound: true,
  choices: {
    // 'absolument !': 2,
    // 'Un peu': 1,
    // 'Je ne sais pas...': 0,
    // 'Pas vraiment': -1,
    // 'Pas du tout': -2,
  },
  questionNumber: '',
  answerChosen: '',
  idQuiz: '',
  sessId: '',
  gameData: [],
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
    case IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case RESTART_QUIZZ:
      return {
        ...state,
        loading: false,
      };
    case SAVE_RESULTS:
      return {
        ...state,
        gameData: action.gameData,
      };
    case SET_GAMEFOUND_FALSE:
      return {
        ...state,
        gameFound: action.gameFound,
      };
    case SET_GAMEFOUND_TRUE:
      return {
        ...state,
        gameFound: action.gameFound,
      };
    default:
      return state;
  }
};

export default reducer;
