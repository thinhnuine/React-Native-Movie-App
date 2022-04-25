import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";

export default function Profile() {
  return (
    <SafeAreaView style={styles.viewContainer}>
      <Text>Profile</Text>
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
