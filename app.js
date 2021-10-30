const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require( './routes/index.js');
const userRouter = require ('./routes/user.js');
const groupRouter = require ('./routes/group.js');
const messageRouter = require ('./routes/message.js');
const groupInitRouter = require ('./routes/participant')

// connexion a la base de données

mongoose.connect('mongodb+srv://Storm1:Pavlo@storm.6o3ej.mongodb.net/ChatDB?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


// Routes

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/group', groupRouter);
app.use('/message', messageRouter);
app.use('/participant', groupInitRouter);

// erreur de endpoint d'une requete

app.use('*', (req, res) => {
    return res.status(404).json({
      success: false,
      message: 'Il existe pas API pour ce endpoint.'
    })
  });

module.exports = app;
