import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContacts() {
  const [name, setName] = useState("");
  const [phoneNumber, setNumberPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log({
        name,
        phoneNumber,
        email,
      });

      await axios.post("http://localhost:5000/contacts", {
        name,
        phoneNumber,
        email,
      });
      navigate("/contacts");
    } catch (e) {
      console.log(e);
    }
  };
  const change = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <>
      <div className='container mt-3 w-50'>
        <div className='fs-5 fw-bold text-center'>Add Contacts</div>

        <form onSubmit={submit}>
          <div className='mt-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='form-control'
              value={name}
              onChange={(e) => {
                change(e, setName);
              }}
            />
          </div>
          <div className='mt-3'>
            <label htmlFor='phoneNumber' className='form-label'>
              Phone Number
            </label>
            <input
              type='text'
              id='phoneNumber'
              className='form-control'
              value={phoneNumber}
              onChange={(e) => {
                change(e, setNumberPhone);
              }}
            />
          </div>
          <div className='mt-3'>
            <label htmlFor='email' className='form-label'>
              E-Mail
            </label>
            <input
              type='text'
              id='email'
              value={email}
              className='form-control'
              onChange={(e) => {
                change(e, setEmail);
              }}
            />
          </div>
          <button className='btn btn-primary mt-3' type='submit'>
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default AddContacts;
