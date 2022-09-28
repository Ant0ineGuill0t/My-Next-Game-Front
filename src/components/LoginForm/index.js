import './style.scss';

function LoginForm() {
  return (
    <div>
      <form>
        <label htmlFor="login-email">
          <input
            className="login-email"
            id="createEmail"
            type="text"
            name="email"
            placeholder="Votre Email"
          />
        </label>
        <label htmlFor="login-password">
          <input
            className="login-password"
            id="createPassword"
            type="password"
            name="password"
            placeholder="Votre password"
          />
        </label>
      </form>
    </div>
  );
}

export default LoginForm;
