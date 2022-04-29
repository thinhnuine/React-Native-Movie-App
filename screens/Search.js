import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, ScrollView, Text } from 'react-native'
import MoviesList from '../components/MoviesList'

export default function Search() {
  useEffect(() => {}, [])

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewMoviesList}>
        <Text>HEHE</Text>
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
