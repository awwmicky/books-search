const express = require('express');
const app = express();


const cors = require('cors');
const logger = require('morgan');
app.use( cors() )
app.use( logger('dev') )
app.use( express.json() )
app.use( express.urlencoded({ extended : true }) )



if (process.env.NODE_ENV === 'production') {
    app.use( express.static('./client/build/') )
}



const apiRoutes = require('./routes/api-route.js');
// const htmlRoutes = require('./routes/html-route.js');
app.use('/api', apiRoutes)
// app.use('/', htmlRoutes)

app.use( (req,res,next) => {
    const error = new Error('×: not found');
    error.status = 404;
    next(error)
})

app.use( (err,req,res,next) => {
    res
    .status(err.status || 505)
    .json({ 
        error: { 
            status: err.status,
            message: err.message 
        } 
    })
})




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