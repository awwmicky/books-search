const express = require('express');
const app = express();



if (process.env.NODE_ENV === 'production') {
    app.use( express.static('../client/build/') )
}

const logger = require('morgan');
app.use( logger('dev') )
app.use( express.json() )
app.use( express.urlencoded({ extended : true }) )



const apiRoutes = require('./routes/api-route.js');
app.use('/api', apiRoutes)

const errors = require('./middleware/errors.js');
app.use( errors.pageNotFoundError )
app.use( errors.internalServerError )



const { 
    MONGO_URI , options
} = require('./config/keys.js');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const PORT = process.env.PORT || 5000;

connection
.once('open', _ => console.log('MongoDB Connected — √', '\n'+ MONGO_URI) )
.on('error', err => console.log('Connection Error — ×', '\n'+ err) )

mongoose.connect(MONGO_URI, options, err => {
    if (err) throw err;

    app.listen(PORT, _ => {
        console.log(
            'Test Server -', 
            `http://localhost:${PORT}`
        )
    })
})