import { StatusBar } from "expo-status-bar";
import { TextInput, StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.viewContainer}>
      <View style={styles.formContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.formInput}
          placeholder="Username"
          placeholderTextColor={'#f1f3f5'}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.formInput}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Password"
          placeholderTextColor={'#f1f3f5'}
        />
        <Text style={styles.errorMessage}>{props.authError}</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => props.onLogin(email, password)}>
            <Text style={styles.textButton}>Login</Text>
          </Pressable>
        </View>
        <View>
          <Link style={styles.forgotLink} to={{ screen: "ResetPassword" }}>
            Reset Password
          </Link>
          <Text style={styles.textDirect}>
          Don't have account?{" "}
          <Link style={styles.textRegister} to={{ screen: "SignUp" }}>
            Register now
          </Link>
        </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    marginBottom: 0,
  },
  content: {
    flex: 1,
    paddingTop: "5%",
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
    textAlign:"center",
    color: "#fff",
    marginBottom: 30,
  },
  errorMessage: {
    color: "red",
    textAlign: "center"
  },
  formContainer: {
    flex: 1.5,
    marginTop: Dimensions.get("screen").height/3,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    width: "100%",
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  formInput: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#444",
    borderRadius: 5,
    color: "#fff"
  },
  forgotLink: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    marginTop: 30,
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
    backgroundColor: "black",
    borderColor: "#444",
    borderWidth: 2,
    width: "60%",
    color: "#fff"
  },
  textButton: {
    color: "#fff",
    fontWeight:"500",
    fontSize: 15
  },
});
