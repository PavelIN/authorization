import { Link } from 'react-router-dom';
import React from 'react';
import './signup.css';
import useForm from './useForm';

const Register = ({ onRegister }) => {

    const { enteredValues, errors, handleChange, isFormValid } = useForm();



    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister(enteredValues);
    };

    return (
        <div className="auth">
            <h2 className="auth__title">Регистрация</h2>
            <form className="form auth__form" onSubmit={handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    minLength="3"
                    maxLength="24"
                    placeholder="Email"
                    value={enteredValues.email || ""}
                    onChange={handleChange}
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    minLength="3"
                    maxLength="24"
                    placeholder="Пароль"
                    value={enteredValues.password || ""}
                    onChange={handleChange}
                />
                <button disabled={!isFormValid ? true: false } className='login__button' type='submit'>Зарегистрироваться</button>
            </form>
            <Link to="/signin" className="auth__login-hint">
                Уже зарегистрированы? Войти
            </Link>
        </div>
    );
};

export default Register;