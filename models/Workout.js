const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schem({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
    }]
})

const Workout = mongose.model("Workout", workoutSchema);
module.exports = Workout