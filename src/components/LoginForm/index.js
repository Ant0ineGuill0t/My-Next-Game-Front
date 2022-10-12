import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  changeFieldCreateUser,
  sendnewUserForm,
  setErrorFormMessage,
  unsetErrorFormMessage,
} from 'src/actions';
import './style.scss';

function LoginForm() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.email);
  const userPseudo = useSelector((state) => state.user.pseudo);
  const userPassword = useSelector((state) => state.user.password);
  const userConfirmPassword = useSelector((state) => state.user.confirmePassword);
  const userAge = useSelector((state) => state.user.age);
  const newUserEmail = useSelector((state) => state.user.newUserEmail);
  const newUserPseudo = useSelector((state) => state.user.newUserPseudo);
  const newUserPassword = useSelector((state) => state.user.newUserPassword);
  const newUserAge = useSelector((state) => state.user.newUserAge);
  const errorForm = useSelector((state) => state.user.errorForm);
  const newUserConfirmPassword = useSelector((state) => state.user.newUserConfirmPassword);
  const validUserForm = useSelector((state) => state.user.validUserForm);
  function handleSubmit(event) {
    event.preventDefault();
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newUserEmail)) {
      dispatch(setErrorFormMessage('Please enter a valid email'));
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(newUserPassword)) {
      dispatch(setErrorFormMessage('Please enter a valid password'));
    }
    if (newUserPassword !== newUserConfirmPassword) {
      dispatch(setErrorFormMessage('Please make sure passwords are the same'));
    }
    else {
      const data = {
        email: newUserEmail, Birthdate: newUserAge, password: { first: newUserPassword, second: newUserConfirmPassword }, pseudo: newUserPseudo, platform: '', avatar: '',
      };
      dispatch(sendnewUserForm(data));
    }
  }
  return (
    <div className="create-user">
      {!validUserForm && (
        <>
          <h2 className="create-user__title">Sign in form</h2>
          <form
            className="create-user__form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="form__input" className="form__label">
              Email address
              <input
                className="form__input"
                id="createEmail"
                type="email"
                name="email"
                value={userEmail}
                placeholder="email"
                required
                onChange={(event) => {
                  dispatch(changeFieldCreateUser(event.target.value, 'email'));
                }}
              />
            </label>
            <label htmlFor="form__input" className="form__label">
              Pseudo
              <input
                className="form__input"
                id="createPseudo"
                type="pseudo"
                name="pseudo"
                value={userPseudo}
                placeholder="pseudo"
                required
                onChange={(event) => {
                  dispatch(changeFieldCreateUser(event.target.value, 'pseudo'));
                }}
              />
            </label>
            <label htmlFor="form__input" className="form__label">
              Password <span className="infobulle" aria-label="Password must contain 8 letters, 1 number and 1 special caracters">?</span>
              <input
                className="form__input"
                id="createPassword"
                type="password"
                name="password"
                autoComplete="on"
                value={userPassword}
                placeholder="password"
                required
                onChange={(event) => {
                  dispatch(changeFieldCreateUser(event.target.value, 'password'));
                }}
              />
            </label>
            <label htmlFor="form__input" className="form__label">
              Confirm your password
              <input
                className="form__input"
                id="comfirmPassword"
                type="password"
                name="password"
                autoComplete="on"
                value={userConfirmPassword}
                placeholder="password"
                required
                onChange={(event) => {
                  dispatch(changeFieldCreateUser(event.target.value, 'confirmPassword'));
                }}
              />
            </label>
            <label htmlFor="form__input" className="form__label">
              Birthdate
              <input
                className="form__input"
                id="addAge"
                type="date"
                name="addAge"
                value={userAge}
                min="1"
                max="99"
                placeholder="dd-mm-yyyy"
                required
                onChange={(event) => {
                  dispatch(changeFieldCreateUser(event.target.value, 'age'));
                }}
              />
              {/* <span className="validity" /> */}
            </label>
            {errorForm.map(
              (message) => <p className="form__error" key={message}>{message}</p>,
            )}
            <button
              type="submit"
              className="form__submit"
              onClick={() => dispatch(unsetErrorFormMessage(''))}
            >
              Send
            </button>
          </form>
        </>
      )}
      {validUserForm && (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default LoginForm;
