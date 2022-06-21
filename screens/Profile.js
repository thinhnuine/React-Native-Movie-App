// import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, Image,  Platform, StatusBar, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useCallback, useContext, useEffect, useState } from "react"
import { AppContext } from "../Context"
import { getAuth, signOut } from "firebase/auth"
import { Link, useFocusEffect } from "@react-navigation/native"
export default function Profile() {
  const { setIsAuth, isEdit, setIsEdit} = useContext(AppContext);
  const auth = getAuth();
  const {displayName, phoneNumber,email} = auth.currentUser
  const [fullName, setFullName] = useState(displayName)
  useEffect(() => {
    setFullName(displayName)
  }, [isEdit])

    // useFocusEffect(useCallback(()=>{
    //   setFullName(displayName)
    // }, []))
  
  const  handleLogOut = ()=>{
    signOut(auth).then().catch()
    setIsAuth(false)
  }
  const mockData = [
    {
      tilte:'address',
      icon: () => <Icon style={styles.iconHeader} name="map-marker-radius" color={'#808080'} size={20}/>,
      value: ''
    },
    {
      tilte:'phoneNumber',
      icon: () => <Icon style={styles.iconHeader} name="phone" color={'#808080'} size={20}/>,
      value: phoneNumber
    },
    {
      tilte:'email',
      icon: () => <MaterialCommunityIcons style={styles.iconHeader} name="email" color={'#808080'} size={20}/>,
      value: email
    }
  ];
  const mockDataWrapper = [
    {
      tilte:'favorites',
      icon: () => <Icon style={styles.iconHeader} name="heart-outline" color={'#FF6347'} size={25}/>,
      value: 'Your Favorites'
    },
    {
      tilte:'payment',
      icon: () => <Icon style={styles.iconHeader} name="credit-card" color={'#FF6347'} size={25}/>,
      value: 'Payment'
    },
    {
      tilte:'Tell your friend',
      icon: () => <Icon style={styles.iconHeader} name="share-outline" color={'#FF6347'} size={25}/>,
      value: 'Tell your friends'
    },
    {
      tilte:'support',
      icon: () => <Icon style={styles.iconHeader} name="account-check-outline" color={'#FF6347'} size={25}/>,
      value: 'Support'
    },
    {
      tilte:'Settings',
      icon: () => <AntDesign style={styles.iconHeader} name="setting" color={'#FF6347'} size={25}/>,
      value: 'Settings'
    },
    {
      tilte:'logout',
      icon: () => <AntDesign style={styles.iconHeader} name="logout" color={'#FF6347'} size={25}/>,
      value: 'Logout',
      onPress: () => handleLogOut()
    },
  ]
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.userInfo__header}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image 
          style={styles.user__avatar}
          source={{
            uri:'https://cdn-icons-png.flaticon.com/512/149/149071.png'
          }}
        />
        <View style={{marginLeft:15}}>
          <Text style={{color:'white',fontWeight:'bold', fontSize:20, marginBottom:10}}>
            {fullName}
          </Text>
          <Text style={{color:'#808080', fontSize:14}}>
            {auth.currentUser.email}
          </Text>
        </View>
        </View>
        <View>
          <Link onPress={()=>setIsEdit(true)} to={{screen:'EditProfile'}}>
            <AntDesign color='white' name="edit" size={20}/>
          </Link>
        </View>
      </View>
      <View style={styles.userInfo__body}>
        <View style={{marginBottom:30}}>
          {mockData?.map((item,index)=>{
            return (
              <View key={index} style={styles.listInfo}>
                {item.icon()}
                <Text style={styles.value}>{item.value !== ''? item.value: "Chưa cập nhập"}</Text>
              </View>
            )
        })}
        </View>
        <View style={{borderWidth: 1,borderLeftWidth:0,borderRightWidth:0, borderColor:'white' ,display:'flex',flexWrap:'wrap',flexDirection:'row' }}>
          <View style={{alignContent:"center",width: '50%',paddingVertical: 15, borderLeftWidth:0 }}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20, textAlign: 'center'}}>$140</Text>
            <Text style={{color:'white',textAlign: 'center'}}>Walet</Text>
          </View>
          <View style={{alignContent:"center",width: '50%',paddingVertical: 15, borderLeftWidth:1,borderRightWidth:0, borderLeftColor:'white'}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20, textAlign: 'center'}}>$140</Text>
            <Text style={{color:'white',textAlign: 'center'}}>Order</Text>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          {mockDataWrapper?.map((item,index)=>{
            return (
              <TouchableOpacity key={index} onPress={()=> item?.onPress()}>
                <View style={styles.listMenuItem}>
                {item.icon()}
                <Text style={styles.value}>{item.value}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
         
        </View>
      </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'black',
    flex: 1,
    color:'white',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0: StatusBar.currentHeight
  },
  userInfo__header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width: '100%' ,
    paddingHorizontal: 30,
    marginLeft: 10,
    marginBottom: 20
  },
  user__avatar: {
    width: 80,
    height:80
  },
  listInfo: {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 15,
    marginLeft:20
  },
  iconHeader: {
    marginRight: 10
  },
  listMenuItem:{
    flexDirection:'row',
    alignItems:'center',
    display:"flex",
    marginLeft:20,
    marginTop:30
  },
  value:{
    color:'white'
  }
})
