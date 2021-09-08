const express = require('express')
const app = express()
require ('./conexion')

const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('../routes/routes') )

app.listen(port, () => {
    console.log("Server listening on port " + port);
});