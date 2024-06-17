import  { useState, useCallback, useEffect} from 'react'
import { View,Image, Text,StyleSheet,TouchableOpacity,Alert,FlatList,TextInput} from 'react-native'
import Module1 from '@/moduleScreens/Module1';
import { useNavigation ,useFocusEffect} from '@react-navigation/native';
import { Searchbar,ActivityIndicator } from 'react-native-paper';
import { modules } from '@/libs/modules';
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


type LastModulePropType = {
  id: number;
  title: string;
  topics :{
      id:number,
      topicTitle:string
  }[]

}

type UserDataPropType = {
  name:string
}




const HomeScreen : React.FC = () => {


    const navigation = useNavigation();


    const [userData,setUserData] = useState({} as UserDataPropType)
    const [searchData,setSearchData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [lastModuleAcess,setLastModuleAccess] = useState<LastModulePropType | undefined>(undefined);
    const [click,setClick] = useState(false);//used as flag to trigger the useEffect




    //this will trigger if i click a specific  module 
    const sendData = (id:number,title:string) => {
      const data = {id:id,title:title}
      setClick(!click)//this will be used in the useEffect
      const dataToStore = JSON.stringify({ id: id, title: title });

      // Store the data in AsyncStorage
       AsyncStorage.setItem("lastModuleAccess", dataToStore);


    };


    const lastModuleAccessModule = (id:number,title:string) => {

      const data = {id:id,title:title}


    }






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
    



   

    const getLastModuleData = async () => {
        try {
            // Retrieve data from AsyncStorage
            const lastModuleData : any = await AsyncStorage.getItem("lastModuleAccess");
            
            // Parse the retrieved JSON string
            const finalLastModuleData = JSON.parse(lastModuleData);

           const moduleData = modules.find(val => val.id === finalLastModuleData.id);


           
            // Set the parsed data in your state
            setLastModuleAccess(moduleData);

        } catch (error) {
            // Handle any errors that occur during the retrieval or parsing process
            console.error("Error getting last module data:", error);
        }
    };



   

    useEffect(() => {

        getLastModuleData();
    
     },[click]);





  useFocusEffect(
    useCallback(() => {
      getData();
     
    },[]),
  
  );


  if (loading) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" animating={true} color="#FF0000" />
      </View>
    );
  }
  
 



  const firstname = userData.name.split(' ');

  const finalModules = modules.filter(val => val.title.startsWith(searchData));
  


interface Module {
  id: number;
  title: string;
  topics :{
      id:number,
      topicTitle:string
  }[]
   // Add other properties as needed
}

interface ItemProps extends Module {
  index: number;
}

//every box or container of the modules
    const Item : React.FC<ItemProps>  = ({title,topics,index,id,}) => (
     <Link  onPress={() => sendData(id,title)}  push href={{
      pathname: "/moduleContainer/[id]",
      params: { id: id } 
      }} style={{...styles.item,...styles.shadowProp, marginLeft: index === 0 ? 0 : 20}}>      
          
      {/* <View>
        <Image style={{width:"100%",height:100,borderRadius:10}} resizeMode='cover' source={require(`../../assets/images/first aid.jpg`)}/>
      </View> */}


        <Text style={styles.title}> {title}</Text>
      
      </Link>

    );





 
  return (  


  
    

    <View style={styles.body}>

          <View style={styles.userDetailsContainer}>


                <View style={{flexDirection:"row", justifyContent:"space-between"}}>

                  <Text  style={{fontSize:35,fontWeight:"700",}}> <Text style={{fontSize:35,fontWeight:"100",fontStyle:"italic",color:"white"}}>Hello, </Text><Text  style={{color:"white"}}>{firstname[0]}</Text></Text>
          
                  <Link push href={'/profile'} style={styles.imageProfile}></Link>

                </View>


                <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchData}
                    value={searchData}
                    theme={{ colors: { primary: '#282828' } }}
                    style={{backgroundColor:"#282828",borderRadius:5}}
                    inputStyle={{fontSize:18,color:"white",padding:0}}
                  
                  />
                </View>




          </View> 

       
      
      <View style={styles.currentModuleContainer}>
        <Text style={{fontSize:20,fontWeight:"700",color:"white"}} >Last Module Access</Text>

        <Link  push href={{
      pathname: "/moduleContainer/[id]",
      params: { id:lastModuleAcess?.id } 
      }}   style={styles.currentReadModule}>

          <Text style={{fontSize:30,color:'white',fontWeight:"900"}}>{lastModuleAcess?.title}</Text>


              {/* <View>
                    {lastModuleAcess?.topics.map(val => <Text style={{color:"white"}} key={val.id}>- {val.topicTitle}</Text>)}
              </View> */}
        </Link>
          
      </View>





        <View style={{flex:1,marginTop:10}}>



          

          <FlatList
           horizontal={true}
          showsVerticalScrollIndicator={false} 
           data={finalModules}
            renderItem={({item,index}) => <Item index={index} {...item} />}
            keyExtractor={item =>  item.id.toString()}
           />
     
     </View>


      

    </View>


              

  )
}

export default HomeScreen;




const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:"center",
      padding:15,

    },
    userDetailsContainer:{
      width: '100%', // Set width to full width of the screen
      height:200,
      borderRadius:6,
      padding:10,
      justifyContent:"space-evenly"
    }, 
    item: {
      backgroundColor: '#282828',
      borderRadius: 8,
      padding:10,
      width: 250,
      marginVertical: 10,
      
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    title: {
      fontSize:35,
      fontWeight:"bold",
      paddingHorizontal:10,
      marginTop:10,
      color:"white"
    },

    topicsStyle:{
      paddingLeft:20
    },
    imageProfile:{
      width:45,
      height:45,
      borderRadius:100,
      backgroundColor:"#d9d9d9"
    },
    searchInput:{
      width:"100%",
      height:45,
      borderRadius:100,
      backgroundColor:"white",
      paddingHorizontal:10,
      fontSize:18
    },
    currentModuleContainer:{
      width:"100%",
      height:200,
      gap:5,
    
    },
    currentReadModule:{
      backgroundColor: '#7B0000',
      borderRadius: 8,
      padding:15,
      width:"100%",
      marginVertical: 10,
      height:150,
      gap:10
      
    }
   
  
})
