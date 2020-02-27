const { Search } = require('../models/');

module.exports = {
    all: (req,res,next) => {
    
        console.log('— GET —')
    
        Search
        .find()
        .then( result => { 
            console.log(result)
            res.send(result)
        })
        .catch( err => {
            console.log(err)
            next(err)
        })
    
    }
};