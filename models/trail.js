const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });



const trailSchema = new Schema ( {
    trailName: {
        type: String,
        required: true,
    enum: ['Hunter Mountain', 'Balsam Lake Mountain', 'Hadly Mountain', 'Poke O Moonshine Mountain', 'Spruce Mountain', 'Overlook Mountain', 'Pillsbury Mountain', 'Black Mountain', 'Red Hill Mountain', 'Belfry Mountain', 'Vanderwhacker Mountain', 'Mount Tremper', 'Goodnow Mountain', 'Snowy Mountain', 'Mount Arab', 'Blue Mountain', 'Owls Head Mountain', 'Kane Mountain', 'Whiteface Mountain', 'Azure Mountain', 'Saint Regis Mountain', 'Wakely Mountain', 'Mohonk Mountain', ]
},
length:
 {type: Number,
required: true
},
elevationGain:
{ type: Number,
    required: true,
},
routeType: 
{ type: String,
    required: true,
    enum: ['out and back', 'Loop']
},
difficultyLevel: 
{ type: Number,
    min: 1,
    max: 5,
    default:1
},
image: String,
reviews: [reviewSchema],
},
{
    timestamps: true
});


module.exports = mongoose.model('Trail', trailSchema);