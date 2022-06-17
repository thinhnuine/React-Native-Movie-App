import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native'
import MoviesList from '../components/MoviesList'
import { useMovieService } from '../libs/service/MovieService'

export default function Home() {
  const {
    getTrendingTV,
    getTrendingMovies,
    getActionMovies,
    getHorrorMovies,
    getMoviesFrom2010,
    getHighRateMovies,
    getComedyMovies,
    getFamilyMovies,
    getScienceFictionMovies
  } = useMovieService()

  // Fetch API
  const [trendingMovie, setTrendingMovie] = useState([])
  const [trendingTV, setTrendingTV] = useState([])
  const [actionMovies, setActionMovies] = useState([])
  const [horrorMovies, setHorrorMovies] = useState([])
  const [moviesFrom2010, setMoviesFrom2010] = useState([])
  const [highRateMovies, setHighRateMovies] = useState([])
  const [familyMovies, setFamilyMovies] = useState([])
  const [comedyMovies, setComedyMovies] = useState([])
  const [scienceFictionMovies, setScienceFictionMovies] = useState([])

  useEffect(() => {
    getTrendingTV().then(result => {
      setTrendingTV(result)
    })
    getTrendingMovies().then(result => {
      setTrendingMovie(result)
    })
    getActionMovies().then(result => {
      setActionMovies(result)
    })
    getHorrorMovies().then(result => {
      setHorrorMovies(result)
    })
    getMoviesFrom2010().then(result => {
      setMoviesFrom2010(result)
    })
    getHighRateMovies().then(result => {
      setHighRateMovies(result)
    })
    getFamilyMovies().then(result => {
      setFamilyMovies(result)
    })
    getScienceFictionMovies().then(result => {
      setScienceFictionMovies(result)
    })
    getComedyMovies().then(result => {
      setComedyMovies(result)
    })
  }, [])

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewMoviesList}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MoviesList title="TV shows trending" data={trendingTV} />
          <MoviesList title="Top hot movies" data={trendingMovie} />
          <MoviesList title="Action movies" data={actionMovies} />
          <MoviesList title="Horror movies" data={horrorMovies} />
          <MoviesList title="Back to 2010" data={moviesFrom2010} />
          <MoviesList title="Family movies" data={familyMovies} />
          <MoviesList title="Science movies" data={scienceFictionMovies} />
          <MoviesList title="Comedy movies" data={comedyMovies} />
          <MoviesList title="High rate movies" data={highRateMovies} />
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'black',
    flex: 1
  },
  viewMoviesList: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  }
})
