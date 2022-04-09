import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
// import ResetPassword from "./pages/ResetPassword.js";
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

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator initialRouteName="Login">
          <Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Screen name="SignUp" component={SignUp} />
          {/* <Screen name="ResetPassword" component={ResetPassword} /> */}
          <Screen name="Content" component={Content} options={{ headerShown: false }} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
