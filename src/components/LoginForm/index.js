import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { changeFieldCreateUser } from 'src/actions';
import './style.scss';

function LoginForm() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.email);
  const userConfirmPassword = useSelector((state) => state.user.confirmePassword);
  const userPassword = useSelector((state) => state.user.password);
  const userAge = useSelector((state) => state.user.age);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <h2>Bienvenue sur le gestionnaire de création de Compte</h2>
      <form className="create-login">
        <label htmlFor="create-login-email">
          Indiquez un Email valide
          <input
            className="create-login-email"
            id="createEmail"
            type="text"
            name="email"
            value={userEmail}
            placeholder="Votre Email"
            required
            onChange={(event) => {
              dispatch(changeFieldCreateUser(event.target.value, 'email'));
            }}
          />
        </label>
        <label htmlFor="create-login-password">
          Rentrez votre mot de passe
          <input
            className="create-login-password"
            id="createPassword"
            type="password"
            name="password"
            value={userPassword}
            placeholder="Votre password"
            required
            onChange={(event) => {
              dispatch(changeFieldCreateUser(event.target.value, 'password'));
            }}
          />
        </label>
        <label htmlFor="create-login-password">
          Confirmez votre votre mot de passe
          <input
            className="create-login-password"
            id="comfirmPassword"
            type="password"
            name="password"
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
          Indiquez votre age
          <input
            className="create-login-password"
            id="addAge"
            type="number"
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
        <button
          type="submit"
          className="create-login-submit"
          onSubmit={handleSubmit}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
