require("dotenv").config();
const axios = require("axios");
const connectDB = require("./config/db.js");
const Episode = require("./models/Episode.js");

const seedEpisodes = async() => {
    try{
        await connectDB();

        const showRes = await axios.get("https://api.tvmaze.com/singlesearch/shows?q=breaking%20bad");
        const showId = showRes.data.id;

        const episodesRes = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);
        const episodesData = episodesRes.data;

        const formattedEpisodes = episodesData.map((ep) => ({
            id : ep.id ,
            name : ep.name ,
            season : ep.season ,
            number : ep.number , 
            airdate : ep.airdate ,
            summary : ep.summary ,
        }));

        await Episode.deleteMany({});
        await Episode.insertMany(formattedEpisodes);

        console.log(`Seeded ${formattedEpisodes.length} episodes successfully`);
        process.exit();
    }

        catch(error){
            console.log("Seeding failed " , error.message);
            process.exit(1);
        }
    
}

seedEpisodes();