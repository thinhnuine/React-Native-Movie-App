const axios = require('axios')
const api_key = 'd77bf22fa27ded25c3e6469ec6a3797c'

export function useService() {
  const getTrendingDayMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
      return response.results
    } catch (error) {
      alert(error)
    }
  }

  const getTrendingWeekMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`)
      return response.results
    } catch (error) {
      alert(error)
    }
  }

  const getTrendingDayTV = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getTrendingWeekTV = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}`)
      return response.results
    } catch (error) {
      alert(error)
    }
  }
  return {
    getTrendingDayMovies,
    getTrendingWeekMovies,
    getTrendingDayTV,
    getTrendingWeekTV
  }
}
