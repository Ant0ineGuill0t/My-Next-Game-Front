import { useSelector, useDispatch } from 'react-redux';
import { changeFieldCreateUser, sendnewUserForm } from 'src/actions';
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
  const newUserConfirmPassword = useSelector((state) => state.user.newUserConfirmPassword);
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    const inputDate = new Date(newUserAge);
    const year = (inputDate.getFullYear());
    const month = (inputDate.getMonth());
    const day = (inputDate.getDate());
    data.set('user[email]', newUserEmail);
    data.set('user[Birthdate][month]', month);
    data.set('user[Birthdate][day]', day);
    data.set('user[Birthdate][year]', year);
    data.set('user[pseudo]', newUserPseudo);
    data.set('user[platform]', '');
    data.set('user[avatar]', '');
    data.set('user[password][first]', newUserPassword);
    data.set('user[password][second]', newUserConfirmPassword);
    data.set('user[_token]', '');
    // data.append('Birthdate', newUserAge);
    dispatch(sendnewUserForm(data));
  }
  return (
    <div>
      <h2>Bienvenue sur le gestionnaire de création de Compte</h2>
      <form
        className="create-login"
        onSubmit={handleSubmit}
      >
        <label htmlFor="create-login-email">
          Indiquez un Email valide
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
          Indiquez un Pseudo valide
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
          Rentrez votre mot de passe
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
          Confirmez votre votre mot de passe
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
          Indiquez votre age
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
        <button
          type="submit"
          className="create-login-submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
