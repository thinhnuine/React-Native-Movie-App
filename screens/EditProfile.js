import React, { useContext, useEffect, useState } from 'react'
import { Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { getAuth, updateProfile } from "firebase/auth";
import { AppContext } from "../Context";
const EditProfile = ({navigation:{navigate}}) => {
  const auth = getAuth();
  const {setIsEdit} = useContext(AppContext)
  const {displayName, phoneNumber,email}= auth.currentUser
  const handleUpdateProfile = ()=>{
    updateProfile(auth.currentUser, {displayName: fullName, phoneNumber: phoneNumber1,email: email}).then((response)=>{
      alert("cập nhập trạng thái thành công")
      setIsEdit(false)
      navigate('Profile')
    }).catch((error)=>{
      alert("Cập nhập trạng thái thất bại")
    })
  }
  const [fullName, setFullName] = useState('')
  const [phoneNumber1, setPhoneNumber1] = useState('')
  const [email1, setEmail1] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity]= useState('')
  useEffect(() => {
    setFullName(displayName)
    setPhoneNumber1(phoneNumber)
    setEmail1(email)
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.changeAvatar}>
          <Image
          style={styles.user__avatar}
          source={{
            uri:'https://cdn-icons-png.flaticon.com/512/149/149071.png'
          }}
          >
          </Image>
            <Ionicons
              name="md-camera-outline"
              size={35}
              color="white"
              style={{
                position:'absolute',
                top:80,
                opacity: 0.7,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
            />
            <Text style={{fontWeight: "bold",marginTop:40,color:'white'}}>{displayName}</Text>
      </View>
      <View style={styles.formInput}>
        <View  style={styles.action}>
          <FontAwesome name="user-o" color={'#808080'} size={20} />
          <TextInput
            value={fullName}
            onChangeText={(value)=> setFullName(value)}
            placeholder={'Nhập họ và tên'}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View  style={styles.action}>
          <MaterialCommunityIcons name="cellphone" color={'#808080'} size={20} />
          <TextInput
            value={phoneNumber1}
            onChangeText={(value)=> setPhoneNumber1(value)}
            placeholder={'Nhập số điện thoại'}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View  style={styles.action}>
          <MaterialCommunityIcons name="email-outline" color={'#808080'} size={20} />
          <TextInput
            value={email1}
            onChangeText={(value)=> setEmail1(value)}
            placeholder={'Nhập email'}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View  style={styles.action}>
          <Fontisto name="world-o" color={'#808080'} size={20} />
          <TextInput
            value={country}
            onChangeText={(value)=> setCountry(value)}
            placeholder={'Nhập địa chỉ'}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View  style={styles.action}>
          <MaterialCommunityIcons name="map-marker-radius" color={'#808080'} size={20}/>
          <TextInput
            value={city}
            onChangeText={(value)=> setCity(value)}
            placeholder={'Nhập tên thành phố'}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
       <TouchableOpacity style={styles.commandButton} onPress={() => handleUpdateProfile()}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black'
  },
  changeAvatar:{
    width:'100%',
    display:'flex',
    alignItems: 'center',
    marginTop: 10,
    position:'relative',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  user__avatar: {
    width: 80,
    height:80,
    borderRadius: 100
  },
  formInput:{
    marginHorizontal: 30
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth:1,
    borderBottomColor: 'gray',
    paddingBottom: Platform.OS === 'ios'? 5:0,
  },
})
export default EditProfile
