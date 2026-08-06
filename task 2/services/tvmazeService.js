const axios = require("axios");

const BASE_URL = ("https://api.tvmaze.com");

async function fetchShowDetails(){
    const response = await axios.get(`${BASE_URL}/singlesearch/shows?q=breaking%20bad`);
    return response.data;
}

async function fetchEpisodes(showId){
    const response = await axios.get(`${BASE_URL}/shows/${showId}/episodes`);
    return response.data;
}

module.exports = { fetchShowDetails , fetchEpisodes };