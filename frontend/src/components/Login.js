import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    const login = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });
    console.log(login);
    if (login) navigate("/contacts");
  };

  return (
    <div className='container w-75 mx-auto mt-5'>
      <div className='fw-bold fs-5 text-center'>Log in</div>
      <form onSubmit={submit}>
        <div className='mt-3'>
          <label htmlFor='email form-label'>Email</label>
          <input
            id='email'
            type='email'
            className='form-control'
            value={email}
            placeholder='E-Mail'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='password form-label'>Password</label>
          <input
            id='password'
            type='text'
            className='form-control'
            value={password}
            placeholder='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
