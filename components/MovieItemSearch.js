import { Link } from '@react-navigation/native'
import { Image, StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const MovieItemSearch = ({ item }) =>{
  return (
  <View style={styles.movieItem__container}>
    <Link to={{ screen: 'MovieDetail', params: { id: item.id } }}>
      <View style={{display: 'flex', justifyContent:'space-between', flexDirection: 'row', flex:1, marginHorizontal:10}}>
        <Image style={styles.movieItem__image} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
        <View style={{marginLeft: 30, display:'flex',flexDirection:'column', justifyContent:'space-around'}}>
          <View style={{width:'100%'}}>
            <Text style={{color:'white', fontWeight:'bold',fontSize:20}}>{item.original_title}</Text>
            <Text style={{color:'white',fontSize:15,marginBottom:20}}>{item.release_date}</Text>
          </View>
          <View style={{display:'flex', flexDirection:'row'}}>
            <AntDesign name="star" size={18} color='#fed142'/>
            <Text style={{color:'#fed142', fontSize:18}}>{item.vote_average}</Text>
          </View>
        </View>
      </View>
    </Link>
  </View>
  )
} 
const styles = StyleSheet.create({
  movieItem__container: {
    display: 'flex',
    flex: 1,
    marginHorizontal:8,
    marginVertical: 10
  },
  movieItem__image: {
    width: 130,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10
  },
  
})

export default MovieItemSearch