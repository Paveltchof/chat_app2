const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.GetAllUsers = (req,res,next) =>{
    User.find() 
    .then( user => {
        if(!user){
            return res.status(404).json({message:'aucun utilisateur trouvé'});
        }
        res.status(200).json(user);
    })

    .catch((error) => res.status(500).json({error}));

    
};

exports.CreateUser = (req, res, next)=>{
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                Username: req.body.Username,
                password: hash
            });
               user.save()
               .then(() => res.status(201).json({message: 'utilisateur crée'}))
               .catch(error => res.status(400).json({error}));
           
        })
           .catch(error => res.status(500).json({error}));
       };


// login user

exports.GetUserByEmail = (req, res, next)=>{
    User.findOne({ email: req.body.email})
    .then(user => {
        if(!user){
            return res.status(401).json({error: 'Utilisateur non trouvé'});
        }
        bcrypt.compare(req.body.password, user.password)
            .then(valid =>{
                if (!valid){
                    return res.status(401).json({error: 'Mot de passe incorrect'});
                }
                res.status(200).json({
                    userId: user._id,
                    Username: user.Username,
                    email: user.email,
                    last_seen: user.last_seen,
                     on_line: true,

                    token: jwt.sign(
                        'RANDOM_CHAT_APP_TOKEN',
                        {expiresIn: '24h'}
                    )
                });
            })
            .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};
exports.DeleteUserByEmail = (req, res, next)=>{
        User.deleteOne({email:req.body.email})
            .then(user =>{
                const index = user.email;
                if (index == -1){
                    return user.splice(index, 1)[0];
                }
                res.status(200).json({message: 'Utilisateur supprimé avec success'});

            })
            .catch(error => res.status(404).json({error: 'Utilisateur non trouvé'}));
    
};
