import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Input from '../components/Input/Input';

function Edit(props) {
    return (
        <div className='container bg-gray'>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <div className='content'>
          <div className="flex justify-content-between">
            <h2>Register client</h2>
          </div>
            <hr />
          <form className='form-min' action="">
            <Input label='Name' field='name' />
            <Input label='Email' field='email' />
            <Input label='Phone' field='phone' />
            <Input label='Enroll Number' field='enroll_number' />
            <Input label='Day of payment' field='date_of_payment' />
            <div className="form-group">
              <button type='submit' className="btn btn-primary">Register client</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Edit;