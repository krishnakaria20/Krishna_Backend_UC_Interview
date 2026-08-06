const Episode = require("../models/Episode.js");

const createEpisode = async(req,res) => {
    try{
    const episode = new Episode(req.body);
    const savedEpisode = await episode.save();
    res.status(201).json({success : true , data : savedEpisode});
    }
    catch(error){
        res.status(400).json({success : false , message : error.message});
    }
};

const getAllEpisodes = async(req,res) => {
    try{
        const episodes = await Episode.find();
        res.status(200).json({success : true , count : episodes.length , message : episodes});
    }
    catch(error){
        res.status(500).json({success : true , message : error.message});
    }
};

const getEpisodeById = async(req,res) => {
    try{
        const episode = await Episode.findOne({id : req.params.id});

        if(!episode){
            res.status(404).json({success : false , message : "Episode not found!"});
        }
        res.status(200).json({success : true , data : episode})
    }
    catch(error){
        res.status(500).json({success : true , message : error.message});
    }
};

const getEpisodesBySeason = async(req,res) => {
    try{
        const episodes = await Episode.find({season : req.params.seasonNumber});

        res.status(200).json({success : true , count : episodes.length , data : episodes});
    }
    catch(error){
        res.status(500).json({success : false , message : error.message});
    }
};

const getSpecificSeasonEpisode = async(req,res) => {
    try{
        const episode = await Episode.findOne({season : req.params.seasonNumber , number : req.params.episodeNumber});
        
        if(!episode){
            return res.status(404).json({success : false , message : "Episode not found !"})
        }
        res.status(200).json({success : true , data : episode})
    }
    catch(error){
        res.status(500).json({success : false , message : error.message});
    }
};

module.exports = {createEpisode , getAllEpisodes , getEpisodeById , getEpisodesBySeason , getSpecificSeasonEpisode};