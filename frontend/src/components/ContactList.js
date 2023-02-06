import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);
  const getContacts = async () => {
    const response = await axios.get("http://localhost:5000/contacts");
    setContacts(response.data);
  };

  const del = async (e, id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      getContacts();
    } catch (e) {
      console.log(e.message);
    }
  };

  const Kosong = () => {
    return (
      <tr>
        <td colSpan='5' className='table-danger text-center fw-bold'>
          Belum Ada Data
        </td>
      </tr>
    );
  };

  return (
    <div className='container'>
      <div className='ts-5 fw-bold text-center mt-3'>UserList</div>
      <Link className='btn btn-primary' to='/addContact'>
        add Contact +
      </Link>
      <table className='table mt-3 table-striped'>
        <thead className='table-dark'>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>no Hp</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className='table-light'>
          {contacts.length > 0 ? (
            contacts.map((contact, i) => {
              return (
                <tr key={contact._id}>
                  <td>{i + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.email}</td>
                  <td>
                    <Link
                      to={`/edit/${contact._id}`}
                      className='btn btn-primary'
                    >
                      Edit
                    </Link>
                    <button
                      className='btn btn-danger'
                      onClick={(e) => {
                        del(e, contact._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <Kosong />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
