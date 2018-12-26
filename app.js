const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');

const exphbs = require('express-handlebars');

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/authChallenge', { useNewUrlParser: true });

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public/'));
app.use(cookieParser());

require('./controllers/auth.js')(app);

app.listen(PORT, () => {
    console.log('App listening on port', PORT)
});

module.exports = app;
