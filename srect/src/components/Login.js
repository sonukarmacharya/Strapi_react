import React, { Component, useState } from "react";
import axios from "axios"


const Login = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // function onSubmit(e) {
  //   e.preventDefault()
  //   console.log("Submitted", );
  // }
  // const submit=(e)=>{
  //   e.preventDefault()
  //   console.log("done")
  // }
  axios
  .post('http://localhost:1337/auth/local/register', {
    username: 'Strapi user',
    email: 'user@strapi.io',
    password: 'strapiPassword',
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

  return (
    <div>
      <form >
        <input type="text" name="email"  />
        <input type="password" name="password" />
        <input type='submit' name="submit" />
      </form>
    </div>
  );
};

export default Login;
