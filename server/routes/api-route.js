const router = require('express').Router();
const { Search } = require('../models/');



router.get('/all', (req,res,next) => {
    
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

})



module.exports = router;