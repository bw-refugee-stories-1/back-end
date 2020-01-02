module.exports = (req, res, next) => {

    if(req.session && req.session.user){
        next();
    } else {
        req.status(401).json({message: 'UNAUTHORIZED'})
        // 401 === unauthorized
    }       
}