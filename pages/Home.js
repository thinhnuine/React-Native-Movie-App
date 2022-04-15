import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useService } from "../libs/service/service";
export default function Home() {

  const {getTrendingDayTV} = useService()
  const [popularFilm, setPopularFilm] = useState([])

  useEffect(()=> {
    getTrendingDayTV().then(result =>{
      console.log('🚀 ~ getTrendingDayTV ~ result', result)
      setPopularFilm(result)
    })
  },[])
  return (
    <SafeAreaView style={styles.viewContainer}>
      <Text>Hello James,</Text>
      <Text>Watching film</Text>
      {/* <FlatList>
        <Image src></Image>
      </FlatList> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
});
