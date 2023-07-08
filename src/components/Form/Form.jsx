import React, { useState } from 'react';

// export function Register() {
//   const [user, setUser] = React.useState({username: "", email: "", password: ""});
//   const [shown, setShown] = React.useState(false);
//   const [error, setError] = React.useState({});
//   const switchShown = (e) => {
//     e.preventDefault()
//     setShown(!shown)
//   };
//   function handleChange (e) {
//     setUser({...user, [e.target.name]: e.target.value});
//     let incorrect = validate({...user, [e.target.name]: e.target.value});
//     setError(incorrect);
//   }
//   function validate (datos) {
//     const regex = new RegExp(/\S+@\S+\.\S+/);
//     let incorrect = {};
//     if(datos.username.length <= 4) {
//       incorrect.username = 'Username must be 5 characters long at least';
//     }else if(!regex.test(datos)){
//       incorrect.email = 'Email must a valid email';
//     }else if(datos.password.length < 8) {
//       incorrect.password = 'Password must be 8 character long at least';
//     }
//     return incorrect;
//   }
//   return <div>
//     <form>
//       <label htmlFor="">Username</label>
//       <input key='1' onChange={handleChange} type="text" placeholder='username...' />
//       {error.username ? <p style={{color: 'red'}} >{error.username}</p> : null}
//       <label htmlFor="">Email</label>
//       <input key='2' onChange={handleChange} type="text" placeholder='email...' />
//       {error.email ? <p style={{color: 'red'}}>{error.email}</p> : null}
//       <label htmlFor="">Password</label>
//       <input key='3' onChange={handleChange} type={shown ? 'text' : 'password'} value={user.password}></input>
//       {error.password ? <p style={{color: 'red'}}>{error.password}</p> : null}
//       <button onClick={switchShown}>
//         {shown ? 'Ocultar' : 'Mostrar'}
//       </button>
//     <input type="submit" value="Register" />
//   </form>
//   </div >
// }
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
    }else if(datos.password.length < 8) {
      incorrect.password = 'Password must be 8 character long at least';
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