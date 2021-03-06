const jwt = require('jsonwebtoken');

// JWT WAS USED TO HERE

module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET || 'blablahblah in development', (err, decodedToken) => {
            if(err){
                res.status(401).json({message: 'not authorized or token not valid'})
            } else {
                req.user = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({message: 'no auth token provided'})
    }
     
}