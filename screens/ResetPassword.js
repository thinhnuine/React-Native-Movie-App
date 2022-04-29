import { StatusBar } from 'expo-status-bar'
import { TextInput, StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../libs/configFirebase'
import { sendPasswordResetEmail } from 'firebase/auth'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Email has been sent to your mail')
      })
      .catch(error => {
        const errorMessage = error.message
        alert(errorMessage)
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
        <Text style={styles.successMessage}>{message}</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={resetPassword}>
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
  successMessage: {
    color: '#51cf66',
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
