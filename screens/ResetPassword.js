import { StatusBar } from 'expo-status-bar'
import { TextInput, StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../libs/configFirebase'

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('')
  const [resetError, setResetError] = useState('')

  const handleResetPassword = email => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Reset password successfully!')
        navigation.push('Login')
      })
      .catch(error => {
        const code = error.code
        switch (code) {
          case 'auth/invalid-email':
            setResetError('Email invalid!')
            break
          case 'auth/user-disabled':
            setResetError('User information has been disabled!')
            break
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setResetError('The email address or password is incorrect!')
            break
          case 'auth/too-many-requests':
            setResetError('The number of login failures has exceeded the specified number!')
            break
        }
      })
  }
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.formContainer}>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.formInput}
          placeholder="Email"
          placeholderTextColor={'#f1f3f5'}
        />
        <Text style={styles.errorMessage}>{resetError}</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => handleResetPassword(email)}>
            <Text style={styles.textButton}>Reset Password</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1
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
    marginTop: Dimensions.get('screen').height / 3,
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
