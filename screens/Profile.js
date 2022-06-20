// import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Profile() {
  const mockData = [
    {
      tilte:'address',
      icon: () => <Icon style={styles.iconHeader} name="map-marker-radius" color={'#808080'} size={20}/>,
      value: 'Dubai'
    },
    {
      tilte:'phoneNumber',
      icon: () => <Icon style={styles.iconHeader} name="phone" color={'#808080'} size={20}/>,
      value: '0971455981'
    },
    {
      tilte:'email',
      icon: () => <MaterialCommunityIcons style={styles.iconHeader} name="email" color={'#808080'} size={20}/>,
      value: 'cuongnv.fpl@gmail.com'
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
      value: 'Logout'
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
          <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}}>
            Name user
          </Text>
          <Text style={{color:'#808080', fontSize:14}}>
            Email
          </Text>
        </View>
        </View>
        <View>
          <AntDesign name="edit" size={20}/>
        </View>
      </View>
      <View style={styles.userInfo__body}>
        <View style={{marginBottom:30}}>
          {mockData?.map((item,index)=>{
            return (
              <View style={styles.listInfo}>
                {item.icon()}
                <Text style={styles.value}>{item.value}</Text>
              </View>
            )
        })}
        </View>
        <View style={{borderWidth: 1,display:'flex',flexWrap:'wrap',flexDirection:'row' }}>
          <View style={{alignContent:"center",width: '50%',paddingVertical: 15, borderLeftWidth:0 }}>
            <Text style={{fontWeight:'bold',fontSize:20, textAlign: 'center'}}>$140</Text>
            <Text style={{textAlign: 'center'}}>Walet</Text>
          </View>
          <View style={{alignContent:"center",width: '50%',paddingVertical: 15, borderLeftWidth:1,borderRightWidth:0}}>
            <Text style={{fontWeight:'bold',fontSize:20, textAlign: 'center'}}>$140</Text>
            <Text style={{textAlign: 'center'}}>Order</Text>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          {mockDataWrapper?.map((item,index)=>{
            return (
              <View key={index} style={styles.listMenuItem}>
                {item.icon()}
                <Text style={styles.value}>{item.value}</Text>
              </View>
            )
          })}
        </View>
      </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center'
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
  }
})
