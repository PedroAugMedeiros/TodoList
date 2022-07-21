import * as C from './styles';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Logo from '../../images/TodoListLogo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  
  const validate = () => {
    const NUMERO_MINIMO = 6;
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if ((regex.test(email)) && (password.length >= NUMERO_MINIMO)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
    validate();
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
    validate();
  };

  const handleClick = () => {
    <Navigate to='/UserTodoList'/>
  };

  return (
    <C.Login>
      <h1>Todo List</h1>
      <img src={ Logo } alt='todolistLogo'>
    </img>
    <section className="Login">
        <Form className="LoginForm">

        <h2>Login</h2>
          <input
            className="w-100 mb-2"
            data-testid="email-input"
            type="email"
            id="email-bar"
            placeholder="E-mail"
            autoComplete="username"
            name="email"
            value={email}
            onChange={handleChangeEmail} />
          <h2>Senha</h2>
          <input
            className="w-100 mb-2"
            data-testid="password-input"
            type="password"
            id="epassword-bar"
            placeholder="Senha"
            autoComplete="current-password"
            name="password"
            value={password}
            onChange={handleChangePassword} />

          <Button
            className="w-100 mb-2"
            variant="primary"
            data-testid="login-submit-btn"
            disabled={disable}
            onClick={handleClick}
          >
            Entrar
          </Button>
        </Form>
      </section>
      </C.Login>
  );
}

export default Login;
