module.exports = {
    MONGO_URI: (
        process.env.MONGODB_URI || 
        'mongodb://localhost/search_db'
    ),
    
    options: { 
        useNewUrlParser    : true, 
        useUnifiedTopology : true,
        useFindAndModify   : false
    }
};