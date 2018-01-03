var express = require('express'),
    app = express(),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    USERS = require('./api/models/userListmodels'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017', function (err) {
    if (err) {
        console.error('mongodb connection error', err);
    }
    console.log('mongo connected');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./api/routes/userListRoutes');
routes(app);

app.listen(port);
