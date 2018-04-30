var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// user schema

/*
var reviewerSchema = Schema({
    ReviewerName: {type:String,required: true},
    smallQuote: {type: String, required: true},
    rating:Number
});
*/
var reviewSchema = Schema({
    MovieTitle:{type: String, required: true},
    ReviewerName: {type:String,required: true},
    smallQuote: {type: String, required: true},
    rating:{type:Number, max:5, min:1, required: true}
});


reviewSchema.pre('save',function (next) {
    if(this.length == 0){
        return next(new Error('must be at least one reviewer'));
    }
    next()
});

module.exports = mongoose.model('Review', reviewSchema);