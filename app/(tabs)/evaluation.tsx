import { View,Text, StyleSheet,FlatList,TouchableOpacity} from "react-native"
import { sampleTrainers } from "@/libs/sampleTrainers";
import {router } from 'expo-router';


const Item   = ({name,field,id}:{name:string,field:string,id:number}) => (
     
  <TouchableOpacity onPress={() => {
    router.push("/evaluationForm")
    router.setParams({id:id.toString(),name:name,field:field})
  }} style={styles.cardContainer} key={id} >      
  
        <View style={{width:60,height:60,borderRadius:120,backgroundColor:"#F1EFEF"}}></View>
        <View style={{width:"75%",gap:2}}>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={{fontSize:16}}>{field}</Text>
        </View>
    
    </TouchableOpacity>
);


const Evaulation = () => {



  
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
           data={sampleTrainers}
            renderItem={({item}) => <Item  {...item} />}
            keyExtractor={item =>  item.id.toString()}
           />
     
    </View>
  )
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