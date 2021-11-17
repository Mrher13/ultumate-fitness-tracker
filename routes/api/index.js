const router = require("express").Routes()
const { Workout } = require('../../models')
router.get("/workouts", (req, res) => {

})
router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body }
        })
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

})
modules.exports = router