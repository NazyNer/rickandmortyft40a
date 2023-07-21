import React, { useState } from 'react';
export default function Form(props) {
  const [user, setUser] = React.useState({email: "", password: ""});
  const [shown, setShown] = React.useState(false);
  const [error, setError] = React.useState({});
  const switchShown = (e) => {
    e.preventDefault()
    setShown(!shown)
  };
  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value});
    let incorrect = validate({...user, [e.target.name]: e.target.value});
    setError(incorrect);
  }
  const validate = datos => {
    let incorrect = {};
    if(datos.email.length <= 4) {
      incorrect.email = 'Username must be 5 characters long at least';
    }else if(datos.password.length < 6) {
      incorrect.password = 'Password must be 6 character long at least';
    }
    return incorrect;
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.login(user)
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Username</label>
      <input onChange={handleChange} name='email' type="text" placeholder='username...' />
      {error.username ? <p style={{color: 'red'}} >{error.email}</p> : null}
      <label htmlFor="">Password</label>
      <input onChange={handleChange} type={shown ? 'text' : 'password'} name='password'></input>
      {error.password ? <p style={{color: 'red'}}>{error.password}</p> : null}
      <button onClick={switchShown}>
        {shown ? 'Ocultar' : 'Mostrar'}
      </button>
    <input type="submit" value="Log In" />
  </form>
  </div >
}