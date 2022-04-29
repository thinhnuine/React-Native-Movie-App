import { StatusBar } from 'expo-status-bar'
import { TextInput, StyleSheet, Text, View, Pressable, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Link } from '@react-navigation/native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.viewContainer}>
      {/* <KeyboardAvoidingView behavior="position"  style={styles.container}> */}
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
        <Text style={styles.errorMessage}>{props.authError}</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => props.onLogin(email, password)}>
            <Text style={styles.textButton}>Login</Text>
          </Pressable>
        </View>
        <View>
          <Link style={styles.forgotLink} to={{ screen: 'ResetPassword' }}>
            Reset Password
          </Link>
          <Text style={styles.textDirect}>
            Don't have account?{' '}
            <Link style={styles.textRegister} to={{ screen: 'SignUp' }}>
              Register now
            </Link>
          </Text>
        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
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
