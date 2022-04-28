import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import { Link } from "@react-navigation/native";

export default function ResetPassword() {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.content}>
        <Image style={styles.brandApp} source={require("../assets/auth/login.png")} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.textGreet}>Reset Password</Text>
        <TextInput style={styles.formInput} placeholder="Enter username" />
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Enter password"
        />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>Reset</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#ffd43b",
    flex: 1,
    alignItems: "center",
    marginBottom: 0,
  },
  content: {
    flex: 1,
    paddingTop: "5%",
  },
  brandApp: {
    height: "100%",
    width: Dimensions.get("screen").width / 1.7,
    resizeMode: "cover",
  },
  textGreet: {
    fontSize: 40,
    fontWeight: "500",
    color: "#ffd43b",
  },
  textRegister: {
    fontStyle: "italic",
    color: "#fa5252",
  },
  textDirect: {
    marginBottom: 30,
  },
  formContainer: {
    flex: 1.5,
    backgroundColor: "#fff",
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    width: "100%",
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  formInput: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  forgotLink: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "right",
    marginTop: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#ffd43b",
    width: "60%",
  },
  textButton: {
    color: "black",
  },
});
