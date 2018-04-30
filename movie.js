var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema(
    {
        title: {type: String, required: true},
        year: {type: Number, required: true},
        genre: {type: String, enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror',
                'Mystery', 'Thriller', 'Western'], required: true},
        actors: {type: Array},
        imageUrl: {type: String},
        avgRating: {type: Number}
    }
);

MovieSchema.pre('save',function (next) {
    if(this.actors.length < 3){
        return next(new Error('Error. Need at least 3 actors'));
    }
    next()
});


module.exports = mongoose.model('Movie', MovieSchema);
