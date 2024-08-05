import { View ,Text,StyleSheet} from "react-native"
import { Stack } from "expo-router"
import { useLocalSearchParams } from 'expo-router';

type EvaluationPropType = {
    name:string,
    field:string,
    id:string,
}
const EvaluationForm = () => {

    const {name,field,id} = useLocalSearchParams() as EvaluationPropType
  return (
    <>
    <Stack.Screen options={{ title: "Evaluate Trainer" }} />
    <View>
        <View style={styles.detailsContainer}>
            <View style={{width:80,height:80,borderRadius:120,backgroundColor:"#F1EFEF"}}></View>
            <View style={{gap:1}}>
                <Text style={styles.cardName}>{name}</Text>
                <Text style={{fontSize:18}}>{field}</Text>
            </View>
        </View>
    </View>
    </>
  )
}

export default EvaluationForm;



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
      detailsContainer:{
        width:"100%",
        backgroundColor:"white",
        flexDirection:"row",
        padding:20,
        alignItems:"center",
        gap:10
      },
      cardName:{
        fontSize:35,
        fontWeight:"900",
        color:"#444242"
      }
  
  
    }
  
   
  )