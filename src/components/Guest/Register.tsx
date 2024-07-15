import React, { useState } from 'react';
import './guest.css';

const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickRegister = () => {
        //TODO Register
        alert('register');
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <div className="modal-body">
            <label>Login:
                <input
                    onChange={e => setLogin(e.target.value.trim())}
                    type='text'
                    value={login}
                />
            </label>
            <label>Password:
                <input
                    onChange={e => setPassword(e.target.value.trim())}
                    type='password'
                    value={password}
                />
            </label>
            <label>First Name:
                <input
                    onChange={e => setFirstName(e.target.value.trim())}
                    type='text'
                    value={firstName}
                />
            </label>
            <label>Last Name:
                <input
                    onChange={e => setLastName(e.target.value.trim())}
                    type='text'
                    value={lastName}
                />
            </label>
            <div className="modal-footer">
                <button className="save-button" onClick={handleClickRegister}>Register</button>
                <button className="clear-button" onClick={handleClickClear}>Clear</button>
            </div>
        </div>
    )
}

export default Register;
