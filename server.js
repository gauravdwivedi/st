const express = require('express');
const PORT = 8000;
const app = express();
const passport = require('passport');
const cookieSession = require('cookie-session');

const db = require('./config/mongoose');
require('./config/passport-google-strategy');
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

app.use(express.urlencoded());
app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => res.send('Hello WOrld!!'));


// app.get('/google',
//     passport.authenticate('google', {
//         scope:
//             ['profile',
//                 , 'email']
//     }
//     ));

// app.get('/google/callback',
//     passport.authenticate('google', {
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
//     }));


app.use('/', require('./routes'));

app.listen(PORT, function (err) {
    if (err) { console.log('Server is met with error'); return; }


    console.log(`Server is running on port no ${PORT}`);
})