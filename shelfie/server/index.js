const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
//configure dotenv
require('dotenv').config()
//My controller functions file
const controller = require('./controller.js');

const app = express();
app.use( bodyParser.json() );
//Set up Massive to connect Express server to database
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance)
  console.log(process.env.CONNECTION_STRING)
}).catch( err => console.log(err) );

const port = process.env.PORT;

app.post( '/api/product', controller.create );
app.get( '/api/inventory', controller.get_inventory );
app.delete( '/api/product/:id', controller.delete );
// app.put( '/api/product/:id', products_controller.update );



app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );