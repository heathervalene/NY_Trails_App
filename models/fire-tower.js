const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fireTowerSchema = new Schema ( {
    name: {
    type: String,
    required: true,
    enum: ['Snowy Mountain Fire Tower', 'Lyon Mountain Fire Tower','Blue Mountain Fire Tower','Wakely Mountain Fire Tower','Hunter Mountain Fire Tower','Philsbury Mountain Fire Tower','Gore Mountain Fire Tower','Mount Adams Fire Tower','Vanderwacher Mountain Fire Tower','Loon Lake Mountain Fire Tower','St. Regis Mountain Fire Tower','Owls Head Mountain Fire Tower','Goodnow Mountain Fire Tower','Hadley Mountain Fire Tower','Azure Mountain Fire Tower','Bald Mountain Fire Tower','Poke O Moonshine Mountain Fire Tower', 'Spruce Mountain Fire Tower', 'Belfry Mountain Fire Tower', 'Cathedral Rock Mountain Fire Tower'],
    },
    region: {
        type: String,
        enum: ['Catskills', 'Adirondacks'],
        required: true,
    },
    dateCompleted: {
        type: Date
    },
    yearBuilt: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});


module.exports =mongoose.model('FireTower', fireTowerSchema);