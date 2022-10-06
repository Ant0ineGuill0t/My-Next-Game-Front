import { useSelector, useDispatch } from 'react-redux';
import {
  changeFieldCreateUser, sendnewUserForm, setErrorFormMessage, unsetErrorFormMessage,
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
  function handleSubmit(event) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newUserEmail)) {
      dispatch(setErrorFormMessage('Veuillez indiquer un Email valide'));
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(newUserPassword)) {
      dispatch(setErrorFormMessage('Veuillez indiquer un Mot de passe valide'));
    }
    if (newUserPassword !== newUserConfirmPassword) {
      dispatch(setErrorFormMessage('Veuillez indiquer deux Mot de passe identiques'));
    }
    event.preventDefault();
    const data = {
      email: newUserEmail, Birthdate: newUserAge, password: { first: newUserPassword, second: newUserConfirmPassword }, pseudo: newUserPseudo, platform: '', avatar: '',
    };

    dispatch(sendnewUserForm(data));
  }
  return (
    <div>
      <h2>Sign in form</h2>
      <form
        className="create-login"
        onSubmit={handleSubmit}
      >
        <label htmlFor="create-login-email">
          E-mail address
          <input
            className="create-login-input"
            id="createEmail"
            type="email"
            name="email"
            value={userEmail}
            placeholder="Votre Email"
            required
            onChange={(event) => {
              dispatch(changeFieldCreateUser(event.target.value, 'email'));
            }}
          />
        </label>
        <label htmlFor="create-login-pseudo">
          Pseudo
          <input
            className="create-login-input"
            id="createPseudo"
            type="pseudo"
            name="pseudo"
            value={userPseudo}
            placeholder="Votre pseudo"
            required
            onChange={(event) => {
              dispatch(changeFieldCreateUser(event.target.value, 'pseudo'));
            }}
          />
        </label>
        <label htmlFor="create-login-password">
          Password
          <input
            className="create-login-input"
            id="createPassword"
            type="password"
            name="password"
            autoComplete="on"
            value={userPassword}
            placeholder="Votre password"
            required
            onChange={(event) => {
              dispatch(changeFieldCreateUser(event.target.value, 'password'));
            }}
          />
        </label>
        <label htmlFor="create-login-password">
          Confirm Password
          <input
            className="create-login-input"
            id="comfirmPassword"
            type="password"
            name="password"
            autoComplete="on"
            value={userConfirmPassword}
            placeholder="Votre password"
            required
            onChange={(event) => {
              dispatch(changeFieldCreateUser(event.target.value, 'confirmPassword'));
            }}
          />
          {/* {
            (userPassword === userConfirmPassword) && (
              <span className="validity" />
            )
          } */}
        </label>
        <label htmlFor="create-login-age">
         Date of birth
          <input
            className="create-login-input"
            id="addAge"
            type="date"
            name="addAge"
            value={userAge}
            min="1"
            max="99"
            placeholder="Votre age"
            required
            onChange={(event) => {
              dispatch(changeFieldCreateUser(event.target.value, 'age'));
            }}
          />
          {/* <span className="validity" /> */}
        </label>
        {
          errorForm.map(
            (message) => <p className="create-login-error" key={message}>{message}</p>,
          )
        }
        <button
          type="submit"
          className="create-login-submit"
          onClick={() => dispatch(unsetErrorFormMessage(''))}
        >
          Sign In 
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
