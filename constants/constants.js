import  Icon  from "react-native-vector-icons/Icon";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { getAuth, signOut } from "firebase/auth";

export const mockData = [
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
const {isAuth, setIsAuth} = React.useContext(AppContext)
const auth = getAuth();
const handleLogOut = ()=>{
  signOut(auth).then(response=>{
    console.log('response :', response);
  }).catch(error=>{
    console.log('error :', error);
  })
  setIsAuth(false);
}
export const mockDataWrapper = [
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
    action: ()=> handleLogOut()
  },
]