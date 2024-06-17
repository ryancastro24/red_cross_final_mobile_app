import {useCallback, useState} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Alert,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import {useFocusEffect} from '@react-navigation/native';


type UserPropType = {
    name:string,
    address: string,
    email:string,
    contact:string,
    userType:string
}
const EditProfile = () => {

    const [userData,setUserData] = useState({} as UserPropType);
    const [loading,setLoading] = useState(false);

    const router = useRouter();


    async function getData() {
        try {
          const token = await AsyncStorage.getItem('token');
      
          const response = await fetch('https://red-cross-api-final.onrender.com/userdata', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: token })
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
  
         

          const finalUserData = data.data 
          console.log(finalUserData)
          setUserData(finalUserData);



        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      }


      useFocusEffect(
        useCallback(() => {
          getData();
         
        },[]),
      
      );
    

  

  const handleLogout = async () => {
    try {
      // Clear user session data
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('isLoggedIn');
      Alert.alert('Logged Out Successfully');
    
        router.replace('/');      
      // On Android, exit the app
      // if (Platform.OS === 'android') {
      //   BackHandler.exitApp();
      // }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };




  
  return (
    <View style={{flex:1, alignItems:"center",position:"relative"}}>


            <View style={{backgroundColor:"#000000",width:"100%",height:150}}></View>



        <View style={{position:"relative",top:-80, alignItems:"center",width:"100%"}}>
        
          <View style={{width:140,height:140,borderRadius:100,backgroundColor:"#d9d9d9"}}></View>
    
          <View style={{marginTop:10,width:"100%",paddingHorizontal:25}}>

            <View>
              <Text style={{fontSize:25,fontWeight:"bold",color:"white",textAlign:"center"}}>{userData.name}</Text>
              <Text style={{fontSize:20,fontWeight:"200",color:"gold",textAlign:"center",fontStyle:"italic"}}>{userData.userType}</Text>
            
              </View>
            <View style={{marginTop:35,gap:20,width:"100%"}}>
                  <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",width:"100%"}}>
                    <Text style={{fontWeight:"normal",fontSize:20,color:"white"}}>Email</Text> 
                    <Text style={{fontSize:20,color:"white",fontWeight:"200"}}>{userData.email}</Text>
                  </View>

                  <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",width:"100%"}}>
                    <Text style={{fontWeight:"normal",fontSize:20,color:"white"}}>Address</Text> 
                    <Text style={{fontSize:20,color:"white",fontWeight:"200"}}>{userData.address}</Text>
                  </View>

                  <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",width:"100%"}}>
                    <Text style={{fontWeight:"normal",fontSize:20,color:"white"}}>Phone</Text> 
                    <Text style={{fontSize:20,color:"white",fontWeight:"200"}}>{userData.contact}</Text>
                  </View>
                  
              </View>
          </View>

          <View style={{marginTop:70,gap:10,width:"100%"}}>

            <TouchableOpacity style={styles.changePassBtn}>
                <Text style={{fontSize:16,color:"white",textAlign:"center",fontWeight:"200"}}>CHANGE PASSWORD</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => handleLogout()} style={styles.logoutBtn}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>LOGOUT</Text>
            </TouchableOpacity>

          </View>


          </View>
    </View>
  )
}

export default EditProfile



const styles = StyleSheet.create({
  changePassBtn:{
    width: "100%",
    height: 45,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    color: "white",
    borderTopWidth: 1, // Top border width
    borderBottomWidth: 1, // Bottom border width
    borderTopColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white top border
    borderBottomColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white bottom border
    borderLeftWidth: 0, // No left border
    borderRightWidth: 0, // No right border
  },
  logoutBtn:{
    width: "100%",
    height: 65,
    backgroundColor: "#7B0000",
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    color: "white",
    borderTopWidth: 1, // Top border width
    borderBottomWidth: 1, // Bottom border width
    borderTopColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white top border
    borderBottomColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white bottom border
    borderLeftWidth: 0, // No left border
    borderRightWidth: 0, // No right border
  }
})