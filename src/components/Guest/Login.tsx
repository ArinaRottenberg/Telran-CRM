import React, { useState } from 'react';
import './guest.css';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClickLogin = () => {
        //TODO Login
        alert('login');
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
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
            <div className="modal-footer">
                <button className="save-button" onClick={handleClickLogin}>Login</button>
                <button className="clear-button" onClick={handleClickClear}>Clear</button>
            </div>
        </div>
    )
}

export default Login;
