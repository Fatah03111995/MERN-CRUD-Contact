import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [contacts, setContacts ] = useState([]);
    useEffect ( () => {
        getContacts()
    },[])
    const getContacts = async () => {
        const response =  await axios.get('http://localhost:5000/contacts')
        setContacts(response.data)
    }
  return (
    <div className="container">
    <div className='ts-5 fw-bold text-center mt-3'>UserList</div>
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
        {(contacts.length>0) ? ( contacts.map((contact,i) => {
            return <tr>
                <td>{i+1}</td>
                <td>{contact.name}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td></td>
            </tr>
        })) : (
            <tr>
                <td colspan='5' className='table-danger text-center fw-bold'>Belum Ada Data</td>
            </tr>
            )
        }
        </tbody>
    </table>
    </div>
  )
}

export default UserList;