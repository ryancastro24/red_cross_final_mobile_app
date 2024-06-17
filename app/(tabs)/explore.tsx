
import  { useState, useCallback, } from 'react'
import { StyleSheet , View, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import { useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


type UserPropType = {
    name:string,
    address:string,
    email:string,
    __v:number,
    id:string,
    certificateUrl:string,
    certificatedApproved: boolean
}
export default function CertificateDownload() {


  const [userData,setUserData] = useState<UserPropType>({} as UserPropType)
   
    const [loading, setLoading] = useState(true);
    const [lastModuleAcess,setLastModuleAccess] = useState(null);
    const [click,setClick] = useState(false);//used as flag to trigger the useEffect

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

      console.log(`$certificate data: ${data}`);
      setUserData(data.data);
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



  const downloadCertificate = async () => {

    const filename = "certificate.pdf";
    const result = await FileSystem.downloadAsync(
      userData.certificateUrl,
      FileSystem.documentDirectory + filename
    );
    console.log(result);
    save(result.uri);
  }


  const save = async (uri:string) => {
    shareAsync(uri)
  }

  return (

    <View style={{width:"100%",height:200, flex:1, padding:10,paddingVertical:50}}>


      <TouchableOpacity disabled={!userData.certificatedApproved} onPress={downloadCertificate} style={{width:"100%", height:250,borderRadius:10,backgroundColor:userData.certificatedApproved ? "#282828" : `red`}} >

      </TouchableOpacity>



    </View>
   
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
