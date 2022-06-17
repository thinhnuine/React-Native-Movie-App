const axios = require('axios')
const api_key = 'd77bf22fa27ded25c3e6469ec6a3797c'

export function useMovieService() {
  const getTrendingMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getTrendingTV = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getActionMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`)
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getHorrorMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27&sort_by=vote_average.desc`
      )
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getMoviesFrom2010 = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=2010&sort_by=vote_average.desc`
      )
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getHighRateMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&certification_country=US&certification=R`
      )
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getScienceFictionMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=878&sort_by=vote_average.desc`
      )
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getFamilyMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10751&sort_by=vote_average.desc`
      )
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  const getComedyMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35&sort_by=vote_average.desc`
      )
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  return {
    getTrendingMovies,
    getTrendingTV,
    getActionMovies,
    getHorrorMovies,
    getMoviesFrom2010,
    getHighRateMovies,
    getScienceFictionMovies,
    getFamilyMovies,
    getComedyMovies
  }
}

export function useMovieDetailService() {
  const getMovieDetail = async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`
      )
      return response.data
    } catch (error) {
      alert(error)
    }
  }

  const getVideoMovieDetail = async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`
      )
      return response.data.results
    } catch (error) {
      alert(error)
    }
  }

  return {
    getMovieDetail,
    getVideoMovieDetail
  }
}
