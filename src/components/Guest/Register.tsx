import React, { useState } from 'react';
import './guest.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/api/accountActions';
import { AppDispatch } from '../../app/store';


const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch<AppDispatch>();

    const handleClickRegister = () => {
        dispatch(registerUser({
            login,
            password,
            firstName,
            lastName,
            number,
            email
        }));
    }


    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setNumber('');
        setEmail('');
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
            <label>Phone number:
                <input
                    onChange={e => setNumber(e.target.value.trim())}
                    type='text'
                    value={number}
                />
            </label>
            <label>Email:
                <input
                    onChange={e => setEmail(e.target.value.trim())}
                    type='text'
                    value={email}
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
