const express = require('express');

const configViewEngine = require('./config/viewEngine');

const webRoutes = require('./routes/web');

const connection = require('./config/database');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 8888;

const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

configViewEngine(app);

//khai bao routes
app.use('/v1', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
