const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const fc = require(__dirname + '/controller');
require('dotenv').config()

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.use( bodyParser.json() );


const port  = process.env.PORT || 4000
app.listen(port, () => {console.log(`Server listening on port: ${port}`); } );