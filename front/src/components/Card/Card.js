import React from 'react';
import Input from '../Input/Input';

function Card({props}) {
    return (
        <div className='card'>
            <div className="card-title">
                CRUD OPERATIONS
            </div>
            <div className="card-subtitle">
                <h3>SIGN IN</h3>
                <p>Enter your credentials to access your account</p>
            </div>
            <div className="card-body">
                <form action="/list" method='post'>
                    <Input label={"email"} text={"email"} field={"email"} />
                    <Input label={"password"} text={"password"} field={"password"} />
                    <div className="form-group">
                        <button type='submit' className="btn btn-primary">SIGN IN</button>
                    </div>
                </form>
            </div>
            <div className="card-subtitle">
                <p>Forgot your password? <a href="#">Reset Password</a> </p>
            </div>
        </div>
    );
}

export default Card;