import { View ,Text} from "react-native"
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Module1 from "@/moduleScreens/Module1";
import Module2 from "@/moduleScreens/Module2";
import Module3 from "@/moduleScreens/Module3";
import Module4 from "@/moduleScreens/Module4";
import Module5 from "@/moduleScreens/Module5";
import Module6 from "@/moduleScreens/Module6";
import Module7 from "@/moduleScreens/Module7";
import Module8 from "@/moduleScreens/Module8";
import Module9 from "@/moduleScreens/Module9";
import Module10 from "@/moduleScreens/Module10";
import Module11 from "@/moduleScreens/Module11";
import Module12 from "@/moduleScreens/Module12";
import Module13 from "@/moduleScreens/Module13";
import RedCrossServices from "@/moduleScreens/RedCrossServices";
import FundamentalPrinciples from "@/moduleScreens/Fundamentals";



type ParamsTypes ={
  id:string,
  title:string | undefined
}
const ModuleCard = () => {



  const {id,title} = useLocalSearchParams() as ParamsTypes;


  return (
    <>
     <Stack.Screen options={{ title: title }} />
    <View style={{padding:15}}>
        

        {id == "1" && <Module1 moduleId={1}/>}
        {id == "2" && <Module2 moduleId={2}/>}
        {id == "3" && <Module3 moduleId={3}/>}
        {id == "4" && <Module4 moduleId={4}/>}
        {id == "5" && <Module5 moduleId={5}/>}
        {id == "6" && <Module6 moduleId={6}/>}
        {id == "7" && <Module7 moduleId={7}/>}
        {id == "8" && <Module8 moduleId={8}/>}
        {id == "9" && <Module9 moduleId={9}/>}
        {id == "10" && <Module10 moduleId={10}/>}
        {id == "11" && <Module11 moduleId={11}/>}
        {id == "12" && <Module12 moduleId={12}/>}
        {id == "13" && <Module13 moduleId={13}/>}
        {id == "14" && <RedCrossServices/>}
        {id == "15" && <FundamentalPrinciples/>}
        
    </View>
    </>
  )
}

export default ModuleCard



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
