const express = require("express");
const router = express.Router();
const{getEpisodesBySeason , getSpecificSeasonEpisode} = require("../controllers/episodeController");

router.get("/:seasonNumber/episodes" , getEpisodesBySeason);
router.get("/:seasonNumber/episodes/:episodeNumber" , getSpecificSeasonEpisode);

module.exports = router;