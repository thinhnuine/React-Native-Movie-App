import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, ScrollView, Text, Image } from 'react-native'
import { useMovieDetailService } from '../libs/service/MovieService'
export default function MovieDetail(props) {
  const { getMovieDetail } = useMovieDetailService()
  const movieId = props.route.params.id
  const [movieDetail, setMovieDetail] = useState({})
  const [video, setVideo] = useState({})

  useEffect(() => {
    getMovieDetail(movieId).then(result => {
      setMovieDetail(result)
    })
  }, [movieId])

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.movieDetail}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.movieItem__image}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`
            }}
          />
          <View style={styles.movieItem__wrap}>
            <Text style={styles.movieItem__title}>{movieDetail?.original_title}</Text>
            <View style={styles.movieItem__info}>
              <View>
                <Text style={styles.info__title}>Duration</Text>
                <Text style={styles.info__detail}>02h15m</Text>
              </View>
              <View>
                <Text style={styles.info__title}>Genre</Text>
                <Text style={styles.info__detail}>{movieDetail?.genres?.map(genre => genre?.name).join(', ')}</Text>
              </View>
              <View>
                <Text style={styles.info__title}>Language</Text>
                <Text style={styles.info__detail}>
                  {movieDetail?.spoken_languages?.map(language => language?.english_name).join(', ')}
                </Text>
              </View>
            </View>
            <View style={styles.movieItem__about}>
              <Text style={styles.info__title}>Overview</Text>
              <Text style={styles.info__detail}>{movieDetail?.overview}</Text>
            </View>
          </View>
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
  movieItem__image: {
    height: 200,
    resizeMode: 'contain',
    marginTop: 30
  },
  movieItem__wrap: {
    paddingLeft: 20,
    paddingRight: 20
  },
  movieItem__info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  movieItem__title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e9ecef',
    marginTop: 30
  },
  info__title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e9ecef',
    marginTop: 30
  },
  info__detail: {
    fontSize: 13,
    color: '#adb5bd',
    marginTop: 5
  },
  movieItem__about: {
    marginTop: 20
  }
})
