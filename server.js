const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodypaser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('Vivek, your MongoDB is connected..!'))
    .catch(err => console.log(err)); 

app.use('api/items', items);     

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started listening on port ${port}`));

 