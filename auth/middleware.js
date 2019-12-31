const bcrypt = require('bcryptjs')
const users = require('../users/users-model.js')


module.exports = (req, res, next) => {
    const { username, password } = req.headers;

    users
    .findByUsername(username)
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            next();            
        } else {
            res.status(403).json({ message: 'FORBIDDEN - YOU ARE NOT AUTHORIZED' });  
            // 403 === forbidden
        }
        
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Error verifying user'})
    });

}