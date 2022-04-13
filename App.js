import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { signInWithEmailAndPassword } from "firebase/auth";
import "react-native-gesture-handler";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Home from "./pages/Home.js";

function Content() {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
    </Navigator>
  );
}

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsAuth(true);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuth ? (
          <Navigator initialRouteName="Content">
            <Screen name="Content" component={Content} options={{ headerShown: false }} />
          </Navigator>
        ) : (
          <Navigator initialRouteName="Login">
            <Screen name="Login" onLogin={handleLogin} component={Login} options={{ headerShown: false }} />
            <Screen name="SignUp" component={SignUp} />
          </Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
