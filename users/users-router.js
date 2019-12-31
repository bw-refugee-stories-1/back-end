const router = require('express').Router();
const users = require('./users-model.js');
const middleware = require('../auth/middleware.js')

router.get('/', middleware, (req, res) => {

    users.find()
         .then(users => {
             res.json(users);
         })
         .catch(err => {
             console.log(err)
             res.status(500).json({ message: 'error getting users'})
         })

})

module.exports = router;