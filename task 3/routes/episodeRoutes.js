const express = require("express");
const router = express.Router();
const{createEpisode , getAllEpisodes , getEpisodeById , }  = require("../controllers/episodeController.js");

router.post("/" , createEpisode);
router.get("/" , getAllEpisodes);
router.get("/:id" , getEpisodeById);

module.exports = router;