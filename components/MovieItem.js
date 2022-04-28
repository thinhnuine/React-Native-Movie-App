import { Link } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
const MovieItem = ({ item }) => (
  <Link to={{screen: "MovieDetail", params: {id: item.id}}}>
    <Image style={styles.movieItem__image} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
  </Link>
);

const styles = StyleSheet.create({
  movieItem__image: {
    width: 110,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 8,
  },
});

export default MovieItem;
