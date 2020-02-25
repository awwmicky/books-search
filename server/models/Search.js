const mongoose = require('mongoose');
const { Schema } = mongoose;



const SearchSchema = new Schema({
    title: {},
    description: {},
    image: {},
    link: {},
    authors: {},
        
    date: {
        type: Date,
        default: Date.now()
    }
});



// console.log(SearchSchema)
const Search = mongoose.model('Search', SearchSchema);
console.log(Search)
module.exports = Search;