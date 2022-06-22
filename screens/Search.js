import { SearchBar } from "@rneui/base"
import { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, ScrollView, Text, FlatList, TextInput, StatusBar, Platform } from 'react-native'
import MovieItem from "../components/MovieItem"
import { searchMovieByKeyWord } from "../libs/service/MovieService"

export default function Search() {
  const {
    getMovieBySearch
  } = searchMovieByKeyWord()
  const [search, setSearch] = useState("");
  const updateSearch = async(value) => {
    try {
        const  a = await getMovieBySearch(value)
        
        setSearch(value)
    } catch (error) {
      
    }
  
  };
  return (
    <SafeAreaView style={styles.viewContainer}>
      <TextInput placeholder="render" />
      <View style={{paddingTop: Platform.OS === 'ios'? 0: 5}}>
        <SearchBar
        style={{padding:5}}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        />
      </View>
      
      <Text style={{color:'white'}}>sdfsdfsdfsdf</Text>
       <StatusBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  viewMoviesList: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  }
})
