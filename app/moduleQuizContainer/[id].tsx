import { View,Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
type ParamsTypes ={
    moduleId:string,
  }
const ModuleQuizContainer = () => {
    const {moduleId} = useLocalSearchParams() as ParamsTypes;
  return (
    <>
    <Stack.Screen options={{ title: `Module${moduleId} Quiz` }} />
    <View>
        <Text>{moduleId}</Text>


    
    </View>
    </>
  )
}

export default ModuleQuizContainer