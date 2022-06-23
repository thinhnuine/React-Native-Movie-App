import { SearchBar } from "@rneui/base"
import { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, FlatList, TextInput, StatusBar, Platform } from 'react-native'
import { searchMovieByKeyWord } from "../libs/service/MovieService"
import _ from "lodash"
import MovieItemSearch from "../components/MovieItemSearch"
import MovieItem from "../components/MovieItem"
export default function Search() {
  const {
    getMovieBySearch
  } = searchMovieByKeyWord()
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const updateSearch = (value) => {
    setSearch(value)
  };
  const callApi = async()=>{
    const item = await getMovieBySearch(search)
    setData(item)
  }
  useEffect(() => {
    if(search){
      const value = _.debounce(callApi,2000)
      value();
    }
  }, [search])
  
  
  return (
    <SafeAreaView style={styles.viewContainer}>
      <TextInput placeholder="render" />
      <View style={{paddingTop: Platform.OS === 'ios'? 0: 5}}>
        <SearchBar
        style={{padding:5}}
        placeholder="Search movie ..."
        onChangeText={updateSearch}
        value={search}
        />
         <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={MovieItemSearch}
      />
      </View>
      
      <Text style={{color:'white'}}></Text>
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
