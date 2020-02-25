const router = require('express').Router();


router.get('/', (req,res) => {
    console.log('— GET —')
    res.send('api')
})



module.exports = router;