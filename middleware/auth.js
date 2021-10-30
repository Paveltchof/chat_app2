const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
const token = req.header.authorization.split('')[1];
const decodedToken = jwt.verify(token, 'RANDOM_CHAT_APP_TOKEN');
const userId = decodedToken.userId;
if (req.body.userId && req.body.userId !== userId){
    throw 'user Id non valide';
}else{
    next();
}
    }catch(error) {
        res.status(401).json({error})
    };
}  