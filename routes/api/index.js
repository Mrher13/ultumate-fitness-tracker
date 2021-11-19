const router = require("express").Router()
const { Workout } = require('../../models')
router.get("/workouts", (req, res) => {
    Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])
        .then((db) => {
            res.json(db)
        })
})
router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
            $push: {
                exercises: req.body
            }
        }, { new: true })
        .then((db) => {
            res.json(db)
        })
})
router.post("/workouts", (req, res) => {
    Workout.create({})
        .then((db) => {
            res.json(db)
        })
})
router.get("/workouts/range", (req, res) => {
    Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])
        .sort({
            _id: -1

        }).limit(7)
        .then((db) => {
            res.json(db)
        })
})
module.exports = router