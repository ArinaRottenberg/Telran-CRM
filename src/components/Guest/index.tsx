import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import './guest.css';


const Guest = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{isLogin ? 'Login' : 'Register'}</h2>
                    <span className="close" onClick={() => { /* можно добавить функционал закрытия модального окна */ }}>×</span>
                </div>
                {isLogin ? <Login /> : <Register />}
                <div className="modal-footer">
                    <button className="clear-button" onClick={() => setIsLogin(prevState => !prevState)}>
                        Switch to {isLogin ? 'Register' : 'Login'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Guest