// @ts-nocheck
import { useRef } from 'react';

import Card from './ui/Card';
import classes from './Login.module.css';

function RegisterForm(props) {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const email = emailInputRef.current.value;
    
    const RegisterData = {
      username: username,
      password: password,
      email: email
    };

    props.onRegister(RegisterData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Username</label>
          <input type='text' required id='title' ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Email</label>
          <input type='email' required id='title' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Password</label>
          <input type='password' required id='image' ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Register</button>
        </div>
      </form>
    </Card>
  );
}

export default RegisterForm;
