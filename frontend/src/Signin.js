import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

const Signin = ({ onLogin }) => {
    console.log(onLogin)
    const [enteredValues, setEnteredValues] = React.useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEnteredValues({
            ...enteredValues,
            [name]: value,
        });
    }

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
            <form className="auth__form" noValidate onSubmit={handleSubmit}>
                <input
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
                    type="password"
                    minLength="3"
                    maxLength="24"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    value={enteredValues.password || ""}
                    onChange={handleChange}
                />
                <button type="submit">Войти</button>
            </form>
            <Link to="/signup" className="auth__login-hint">
                Зарегистрироваться
            </Link>
        </div>
    );
};

export default Signin;