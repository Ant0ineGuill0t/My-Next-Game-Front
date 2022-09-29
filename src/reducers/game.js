import { TOGGLE_LOGIN_FORM } from '../actions';

const initialState = {
  game: '',
  question: 'Aimez-vous l\'aventure ?',
  choices: {
    'absolument !': 2,
    'Un peu': 1,
    'Je ne sais pas...': 0,
    'Pas vraiment': -1,
    'Pas du tout': -2,
  },
  questionNumber: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
