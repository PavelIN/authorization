const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const users = [{email:'1235',password:'66666'}]

console.log(users)

router.post('/signup', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    const isExist = users.find(user =>
        user.email === email
    )
    if (isExist) {
        return res.status(400).json('Пользователь с таким email уже существует')
    }else{
    users.push({
        email: email,
        password: password,
    })
}
    res.status(200).json('Пользователь создан')
});



router.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const isExist = users.find(user =>
        user.email === email && user.password===password
    )
    if (!isExist) {
        return res.status(400).json('Неверный логин или пароль')
    }
    const token = jwt.sign(
        { email: email },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        },
      );
     return  res.status(200).json(token)
});



router.get('/users', (req, res) => {
 const token = req.headers.authorization
    try {
        const user = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        return res.status(403).json("пользователь не авторизован")
    }
     return res.send(users)
});


module.exports = router;