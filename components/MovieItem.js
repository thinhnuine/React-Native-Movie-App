import { Link } from '@react-navigation/native'
import { Image, StyleSheet, View } from 'react-native'
const MovieItem = ({ item }) => (
  <View style={styles.movieItem__container}>
    <Link to={{ screen: 'MovieDetail', params: { id: item.id } }}>
      <Image style={styles.movieItem__image} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
    </Link>
  </View>
)

const styles = StyleSheet.create({
  movieItem__container: {
    display: 'flex',
    flex: 1,
    marginRight: 8
  },
  movieItem__image: {
    width: 110,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10
  }
})

export default MovieItem
