export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const CHANGE_FIELD_CREATE_USER = 'CHANGE_FIELD_CREATE_USER';
export const CHANGE_FIELD_USER_LOGIN = 'CHANGE_FIELD_USER_LOGIN';

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
