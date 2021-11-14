const router = requires("express").Routes()
const path = require('path');
const apiRoutes = require("./api")


router.use("/api", apiRoutes)
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);
router.get('/excercise', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
);
router.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/stats.html'))
);
modules.exports = router