import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, StyleSheet, Text, View } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
