const axios = require("axios");
const api_key = "d77bf22fa27ded25c3e6469ec6a3797c";

const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`);
    return response
  } catch (error) {
    alert(error)
  }
};

const 
