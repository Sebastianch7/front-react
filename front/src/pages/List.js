import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import TableRow from '../components/TableRow/TableRow';
import { useState, useEffect } from 'react';

function List(props) {

    const [usuarios, setsetUsuarios] = useState([])

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/client", requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((usuarios) => {
                setsetUsuarios(usuarios)
            })
    }, []);

    return (
        <div className='container bg-gray'>
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            <div className='content'>
                <div className="flex justify-content-between">

                    <h2>Client List</h2>
                    <a href='/create' className="btn btn-primary btn-small">ADD NEW CLIENT</a>
                </div>
                <hr />
                <table>
                    <thead>
                        <th></th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>Enroll Number</th>
                        <th>Date of payment</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {usuarios.map((user, i) => {
                            return (
                                <TableRow
                                    img={"./img/perfil.jpeg"}
                                    name={user.name}
                                    email={user.email}
                                    phone={user.phone}
                                    enroll_number={user.enroll_number}
                                    date_payment={user.date_of_payment}
                                    id={user.id}
                                ></TableRow>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default List;