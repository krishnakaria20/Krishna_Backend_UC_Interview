const { fetchShowDetails, fetchEpisodes } = require("../services/tvmazeService.js");

async function getShowDetails(req,res){
    try{
        const show = await fetchShowDetails();

        const trimmedShowDetails = {
            name : show.name,
            genres : show.genres,
            rating : show.rating,
            premiered : show.premiered,
            status : show.status,
            summary : show.summary
        };

        res.status(200).json(trimmedShowDetails);
    }
    catch(error){
        console.log(error.message);
        res.status(502).json({error : "failed to fetch show details from TVMaze"});
    }

}

async function getEpisodes(req,res){
    try{
        const show = await fetchShowDetails();
        const episodes = await fetchEpisodes(show.id);

        let trimmedEpisodes = episodes.map((ep) => ({
            id : ep.id,
            name : ep.name,
            season : ep.season,
            number : ep.number,
            airdate : ep.airdate,
            summary : ep.summary
        }));

        const {search} = req.query;

        if(search){
            trimmedEpisodes = trimmedEpisodes.filter((ep) =>
            ep.name.toLowerCase().includes(search.toLowerCase())
        );
        }

        res.status(200).json(trimmedEpisodes);
    }
    catch(error){
        console.log(error.message);
        res.status(502).json({error : "failed to fetch episodes from TVMaze"});
    }   
}

module.exports = {getShowDetails , getEpisodes};