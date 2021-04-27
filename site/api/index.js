const express = require('express');
var path = require('path');
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`Connected to port${port}`))

module.exports = app