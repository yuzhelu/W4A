var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// user schema

var actorSchema = Schema({
    actorName: {type:String,required: true},
    characterName: {type:String,required:true}
});

var movieSchema = Schema({
    Title:{type: String, required: true, index: { unique: true }},
    releaseYear: {type: Number, required: true},
    imageURL: String,
    avgRating: Number,
    Genre:{
        type: String,
        enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy',
            'Horror', 'Mystery', 'Thriller', 'Western']
    },
    Actors: {type:[actorSchema]}
});

movieSchema.pre('save',function (next) {
    if(this.Actors.length < 3){
        return next(new Error('Fewer than 3 Actors'));
    }
    next()
});

// return the model
module.exports = mongoose.model('Movie', movieSchema);