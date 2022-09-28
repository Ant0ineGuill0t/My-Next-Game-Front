export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const CHANGE_FIELD_CREATE_USER = 'CHANGE_FIELD_CREATE_USER';

export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM,
});

export const changeFieldCreateUser = (newValue, fieldIdentifier) => ({
  type: CHANGE_FIELD_CREATE_USER,
  value: newValue,
  identifier: fieldIdentifier,
});
