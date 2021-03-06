import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useContext, useState } from 'react'
import Login from '../screens/Login.js'
import SignUp from '../screens/SignUp.js'
import Home from '../screens/Home.js'
import Profile from '../screens/Profile'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Search from '../screens/Search'
import MovieDetail from '../screens/MovieDetail'
import ResetPassword from '../screens/ResetPassword'
import { AppContext } from "../Context.js"
import { auth } from "../libs/configFirebase.js"
import EditProfile from "../screens/EditProfile.js"
import { StatusBar } from "react-native"
function Content() {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
    <Navigator>
      <Screen
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000000'
          },
          tabBarInactiveTintColor: '#cccccc',
          tabBarActiveTintColor: '#ffffff',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
        name="Home"
        component={Home}
      />
      <Screen
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000000'
          },
          tabBarInactiveTintColor: '#cccccc',
          tabBarActiveTintColor: '#ffffff',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="magnify" color={color} size={size} />
        }}
        name="Search"
        component={Search}
      />
      <Screen
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000000'
          },
          tabBarInactiveTintColor: '#cccccc',
          tabBarActiveTintColor: '#ffffff',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
        name="Profile"
        component={Profile}
      />
    </Navigator>
  )
}
const Layout = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  const {isAuth, setIsAuth} = useContext(AppContext)
  const [authError, setAuthError] = useState('')
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        setIsAuth(true)
      })
      .catch(error => {
        const code = error.code
        switch (code) {
          case 'auth/invalid-email':
            setAuthError('Email invalid!')
            break
          case 'auth/user-disabled':
            setAuthError('User information has been disabled!')
            break
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setAuthError('The email address or password is incorrect!')
            break
          case 'auth/too-many-requests':
            setAuthError('The number of login failures has exceeded the specified number!')
            break
        }
      })
  }
  return (
    <NavigationContainer>
      {isAuth ? (
        <Navigator initialRouteName="Content">
          <Screen name="Content" component={Content} options={{ headerShown: false }} />
          <Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: true }} />
          <Screen name="EditProfile" component={EditProfile} options={{ headerShown: true, headerStyle:{
            height: 20
          } }}/>
        </Navigator>
      ) : (
        <Navigator initialRouteName="Login">
          <Screen name="Login" options={{ headerShown: false }}>
            {({ navigation }) => <Login navigation={navigation} onLogin={handleLogin} authError={authError} />}
          </Screen>
          <Screen
            name="SignUp"
            options={{
              title: 'Sign up'
            }}
            component={SignUp}
          />
          <Screen
            name="ResetPassword"
            options={{
              title: 'Reset password'
            }}
            component={ResetPassword}
          />
        </Navigator>
      )}
    </NavigationContainer>
  )
}

export default Layout