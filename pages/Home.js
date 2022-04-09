import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";

export default function Home() {
  return (
    <View style={styles.viewContainer}>
    <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#F2D1DC",
    flex: 1,
    alignItems: "center",
  },
});
