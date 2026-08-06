const express = require("express");
const router = express.Router();

const {getShowDetails , getEpisodes} = require("../controller/showController.js");

router.get("/show-details",getShowDetails);
router.get("/episodes",getEpisodes);

module.exports = router;