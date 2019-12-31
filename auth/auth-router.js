const router = require('express').Router();
const users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');


// Registration
router.post('/register', (req, res) => {

    const {username, password} = req.body;
    users.insert({ username, password: bcrypt.hashSync(password, 8) })
    .then(id => {
        res.status(201).json({ message: 'registered', id });
        // 201 === created
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Error Registering User'})
    });

})


// Login
router.post('/login', (req, res) => {

    const {username, password} = req.body;
    users
    .findByUsername(username)
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){

            res.status(200).json({ message: 'login successful' });
            // 200 === ok
        } else {
            res.status(401).json({ message: 'User does not exist' });  
            // 401 === unauthorized
        }
        
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Error logging in'})
    });

})


module.exports = router;