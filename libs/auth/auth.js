import { auth } from "../configFirebase";

export const handleSignIn = (email,password) => {
  auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
    const user = userCredentials.user;
    console.log("Hello", user.email)
  }).catch(error => console.log(error.message))
}