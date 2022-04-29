import { StatusBar } from 'expo-status-bar'
import { TextInput, StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../libs/configFirebase'

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [signUpError, setSignUpError] = useState('')

  const handleSignUp = (email, password) => {
    if (rePassword !== password) {
      setSignUpError('Password not matching!')
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        alert('Sign up successfully!')
        navigation.push('Login')
      })
      .catch(error => {
        const code = error.code
        switch (code) {
          case 'auth/email-already-in-use':
            setSignUpError('Email already in use!')
            break
          case 'auth/weak-password':
            setSignUpError('Weak password!')
        }
      })
  }
  return (
    <View style={styles.viewContainer}>
      <View style={styles.formContainer}>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.formInput}
          placeholder="Email"
          placeholderTextColor={'#f1f3f5'}
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.formInput}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Password"
          placeholderTextColor={'#f1f3f5'}
        />
        <TextInput
          value={rePassword}
          onChangeText={text => setRePassword(text)}
          style={styles.formInput}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Re password"
          placeholderTextColor={'#f1f3f5'}
        />
        <Text style={styles.errorMessage}>{signUpError}</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => handleSignUp(email, password)}>
            <Text style={styles.textButton}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    marginBottom: 0
  },
  content: {
    flex: 1,
    paddingTop: '5%'
  },
  textGreet: {
    fontSize: 40,
    fontWeight: '500',
    color: '#ffd43b'
  },
  textRegister: {
    fontStyle: 'italic',
    color: '#fa5252'
  },
  textDirect: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center'
  },
  formContainer: {
    flex: 1,
    marginTop: Dimensions.get('screen').height / 3.4,
    width: '70%'
  },
  formInput: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#444',
    borderRadius: 5,
    color: '#fff'
  },
  forgotLink: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'black',
    borderColor: '#444',
    borderWidth: 2,
    width: '60%',
    color: '#fff'
  },
  textButton: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15
  }
})
