const express = require('express');
var app = express();
var cors = require('cors');
var routes = require('./routes/router');
var bodyParser = require('body-parser');
const { v } = require('./utils/constant')
const { ErrorResult } = require('./utils/base_response');

const api = 'api';
const port = 8888;
const baseUrl = `/${api}/${v}`;

const auth = require('./middleware/auth');
// app.use(auth);
app.use(cors({
    methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(baseUrl, routes);
app.use((req, res) => {
    res.status(404).json(ErrorResult(500, 'Your page you request not found or you are not permitted access it !'));
});



const { Librarian } = require('./database/db')
var server = app.listen(port, () => {
    const host = server.address().address;
    console.log(`Server is running at http://${host}:${port}`);
});