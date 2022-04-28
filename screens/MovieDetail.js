import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import { useService } from "../libs/service/service";

export default function MovieDetail() {
  const {
   
  } = useService();

  
  useEffect(() => {
  }, []);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.movieDetail}>
        <ScrollView showsVerticalScrollIndicator={false}>
         
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  movieDetail: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
});
