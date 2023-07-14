import React from 'react';
import './signin.css';
import useForm from './useForm';
import { Link } from 'react-router-dom';

const Signin = ({ onLogin }) => {

    const { enteredValues, errors, handleChange, isFormValid } = useForm();

 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!enteredValues.email || !enteredValues.password) {
            return;
        }
        onLogin(enteredValues);
    };

    return (
        <div className="auth">
            <h2 className="auth__title">Вход</h2>
            <form className="auth__form"  onSubmit={handleSubmit}>
                <input  className='login__input'
                    minLength="3"
                    maxLength="24"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={enteredValues.email || ""}
                    onChange={handleChange}
                />
                <input
                    className='login__input'
                    type="password"
                    minLength="3"
                    maxLength="24"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    value={enteredValues.password || ""}
                    onChange={handleChange}
                />
                <button disabled={!isFormValid ? true: false } className='login__button' type='submit'>Войти</button>
            </form>
            <Link to="/" className="auth__login-hint">
                Зарегистрироваться
            </Link>
        </div>
    );
};

export default Signin;