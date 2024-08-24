import { View,Text, StyleSheet,FlatList,TouchableOpacity} from "react-native"
import {router } from 'expo-router';
import { useState,useCallback } from "react";
import { useFocusEffect} from '@react-navigation/native';

const Item   = ({name,field,_id}:{name:string,field:string,_id:string}) => (
     
  <TouchableOpacity onPress={() => {
    router.push("/evaluationForm")
    router.setParams({id:_id,name:name,field:field})
  }} style={styles.cardContainer} key={_id} >      
  
        <View style={{width:60,height:60,borderRadius:120,backgroundColor:"#F1EFEF"}}></View>
        <View style={{width:"75%",gap:2}}>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={{fontSize:16}}>{field}</Text>
        </View>
    
    </TouchableOpacity>
);


const Evaulation = () => {


  const [instructors,setInstructors] = useState(null);



  
  async function getData() {
    try {
     
  
      const response = await fetch('https://red-cross-api-final.onrender.com/api/instructors');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();

      console.log(data)
      setInstructors(data);

    } catch (error) {
      console.error('Error:', error);
    } 
  }
  

  
  useFocusEffect(
    useCallback(() => {
      getData();
     
    },[]),
  
  );


if(instructors === null) {
  return(
    <View>
      <Text>Loading....</Text>
    </View>
  )
}
  


else {

  
  return (
    <View  style={styles.main}>
        <Text style={styles.header}>Evaluate Trainers</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop:5
          }}
        />

        
      <FlatList
           
          showsVerticalScrollIndicator={false} 
           data={instructors}
            renderItem={({item}) => <Item  {...item} />}
            keyExtractor={item =>  item._id}
           />
     
    </View>
  )
}
}


export default  Evaulation;



const styles = StyleSheet.create(
  {

    main: {
      flex: 1,
      paddingVertical:50,
      paddingHorizontal:20,
    },

    header:{
      fontSize:25,
    },
    cardContainer:{
      width:"100%",
      height:80,
      backgroundColor:"white",
      marginTop:20,
      borderRadius:5,
      justifyContent:"center",
      alignItems:"flex-start",
      padding:10,
      flexDirection:"row",
      gap:15,
      shadowColor: 'black',
      shadowOffset: {width: -2, height: 2},
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    cardName:{
      fontSize:25,
      fontWeight:"900",
      color:"#444242"
    }


  }

 
)