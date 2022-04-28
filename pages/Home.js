import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native'
import { useService } from '../libs/service/service'

export default function Home() {
  const { getTrendingDayTV } = useService()
  const [popularFilms, setPopularFilms] = useState([])

  useEffect(() => {
    getTrendingDayTV().then(result => {
      setPopularFilms(result)
    })
  }, [])
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.textGreeting}>
        <Text style={styles.textGreeting__hello}>Hello James,</Text>
        <Text style={styles.textGreeting__suggest}>Choose your favourite movie</Text>
      </View>
      <View style={styles.popular}>
        <Text style={styles.popular__heading}>Popular</Text>
        {popularFilms ? (
          popularFilms.map(popularFilm => {
            return (
              <View key={popularFilm.id} style={styles.popularItem}>
                <Image
                  style={styles.popularItem__image}
                  source={{ uri: `https://image.tmdb.org/t/p/w500${popularFilm.poster_path}` }}
                />
                <View style={styles.popularItem__left}>
                  <Text style={styles.popularItem__name}>{popularFilm.name}</Text>
                  <Text style={styles.popularItem__date}>
                    {popularFilm.first_air_date.slice(0, 4)} | {popularFilm.origin_country}
                  </Text>
                  <Text style={styles.popularItem__genres}>Action & Adventure</Text>
                </View>
              </View>
            )
          })
        ) : (
          <Text></Text>
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  textGreeting: {
    paddingTop: 20,
    paddingLeft: 20
  },
  textGreeting__hello: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: '500'
  },
  textGreeting__suggest: {
    fontSize: 18,
    color: '#999'
  },
  popular: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  popular__heading: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 20
  },
  popularItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'flex-start'
  },
  popularItem__left: {
    marginLeft: 15
  },
  popularItem__image: {
    width: 120,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 15
  },
  popularItem__name: {
    fontSize: 22,
    fontWeight: '500'
  }
})
