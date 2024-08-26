import { View,Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
import ModuleQuiz1Container from '@/moduleQuizzes/moduleQuiz1';
import ModuleQuiz2Container from '@/moduleQuizzes/moduleQuiz2';
import ModuleQuiz3Container from '@/moduleQuizzes/moduleQuiz3';
import ModuleQuiz4Container from '@/moduleQuizzes/moduleQuiz4';
import ModuleQuiz5Container from '@/moduleQuizzes/moduleQuiz5';
import ModuleQuiz6Container from '@/moduleQuizzes/moduleQuiz6';
import ModuleQuiz7Container from '@/moduleQuizzes/moduleQuiz7';
import ModuleQuiz8Container from '@/moduleQuizzes/moduleQuiz8';
import ModuleQuiz9Container from '@/moduleQuizzes/moduleQuiz9';
import ModuleQuiz10Container from '@/moduleQuizzes/moduleQuiz10';
import ModuleQuiz11Container from '@/moduleQuizzes/moduleQuiz11';
import ModuleQuiz12Container from '@/moduleQuizzes/moduleQuiz12';
import ModuleQuiz13Container from '@/moduleQuizzes/moduleQuiz13';
type ParamsTypes ={
    moduleId:string,
  }
const ModuleQuizContainer = () => {
    const {moduleId} = useLocalSearchParams() as ParamsTypes;
  return (
    <>
    <Stack.Screen options={{ title: `Module${moduleId} Quiz` }} />
    <View>
         
        {moduleId === "1" && <ModuleQuiz1Container/>} 
        {moduleId === "2" && <ModuleQuiz2Container/>} 
        {moduleId === "3" && <ModuleQuiz3Container/>} 
        {moduleId === "4" && <ModuleQuiz4Container/>} 
        {moduleId === "5" && <ModuleQuiz5Container/>} 
        {moduleId === "6" && <ModuleQuiz6Container/>} 
        {moduleId === "7" && <ModuleQuiz7Container/>} 
        {moduleId === "8" && <ModuleQuiz8Container/>} 
        {moduleId === "9" && <ModuleQuiz9Container/>} 
        {moduleId === "10" && <ModuleQuiz10Container/>} 
        {moduleId === "11" && <ModuleQuiz11Container/>} 
        {moduleId === "12" && <ModuleQuiz12Container/>} 
        {moduleId === "13" && <ModuleQuiz13Container/>} 


    
    </View>
    </>
  )
}

export default ModuleQuizContainer