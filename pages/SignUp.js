import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import { Link } from "@react-navigation/native";

export default function SignUp() {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.content}>
        <Image style={styles.brandApp} source={require("../assets/auth/signup.png")} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.textGreet}>Join to relax</Text>
        <Link to={{screen: "Login"}} style={styles.textDirect}>
          Have an account? <Text style={styles.textRegister}>Login now</Text>
        </Link>
        <TextInput style={styles.formInput} placeholder="Enter username" />
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Enter password"
        />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>Sign up</Text>
          </Pressable>
        </View>
      </View>
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
    color: "#F2D1DC",
    marginBottom: 20,
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
    paddingBottom: 40,
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
    marginBottom:20
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
    backgroundColor: "#F2D1DC",
    width: "60%",
  },
  textButton: {
    color: "black",
  },
});
