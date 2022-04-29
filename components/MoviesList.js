import { FlatList, Text, StyleSheet, View } from 'react-native'
import MovieItem from './MovieItem'

const MoviesList = props => {
  return (
    <View style={styles.viewMovieItem}>
      <Text style={styles.viewMovieItem__title}>{props.title}</Text>
      <FlatList
        data={props.data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={MovieItem}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  viewMovieItem: {
    marginBottom: 15
  },
  viewMovieItem__title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
    color: 'white'
  }
})

export default MoviesList
