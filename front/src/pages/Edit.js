import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Input from '../components/Input/Input';
import { useState, useEffect } from 'react';

function Edit(props) {
    const [usuario, setsetUsuario] = useState([])

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/client/1", requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((usuario) => {
                setsetUsuario(usuario)
            })
    }, []);
    return (
        <div className='container bg-gray'>
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            <div className='content'>
                <div className="flex justify-content-between">
                    <h2>Update client</h2>
                </div>
                <hr />
                <form className='form-min' action="">
                    <Input label='Name' field='name' value={usuario.name} />
                    <Input label='Email' field='email' value={usuario.email} />
                    <Input label='Phone' field='phone' value={usuario.phone} />
                    <Input label='Enroll Number' field='enroll_number' value={usuario.enroll_number} />
                    <Input label='Day of payment' field='date_of_payment' value={usuario.date_of_payment} />
                    <div className="form-group">
                        <button type='submit' className="btn btn-primary">Update client</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;