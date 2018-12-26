const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (app) => {
    // SIGN UP FORM
    app.get('/sign-up', (req, res) => {
        res.render('sign-up');
    });
    // SIGN UP POST
    app.post('/sign-up', (req, res) => {
        console.log(req.body);
    });
}
