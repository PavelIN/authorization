export const BASE_URL = 'https://localhost:3000';



export const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const response = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}


export const register = ({ email, password }) => {
    return fetch(`http://localhost:3000/signup`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password }),
    })
        .then(res => response(res));
};


export const login = ({ email, password }) => {
    return fetch(`http://localhost:3000/signin`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then((res) => response(res));
   
};



export const getUsers = (jwt) => {
    return fetch(`http://localhost:3000/users`, {
      method: 'GET',
      headers: {
        ...headers,
        'Authorization': jwt,
      }
    }).then((res) => response(res));
  };