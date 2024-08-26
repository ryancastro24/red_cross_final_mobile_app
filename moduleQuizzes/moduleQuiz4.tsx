import { View,Text,ScrollView,TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
const ModuleQuiz4Container = () => {

  const [answers,setAnswers] = useState({
    ans1:"",
    ans2:"",
    ans3:"",
    ans4:"",
    ans5:"",
})

const handleValueChange = (newValue:string) => {
   // Check if the selected radio button represents the correct answer
   setAnswers({ ...answers, ans1: newValue }); // Store the full value of the selected option
};


const handleSubmit = () => {  
  console.log(answers);
}


  return (
    <ScrollView>
    <View style={{padding:20}}>

        <View style={{marginBottom:30}}>
          <Text>Question Number 1</Text>
  <RadioButton.Group 
      onValueChange={handleValueChange} 
      value={answers.ans1} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Choice 1</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Choice 2</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Choice 3</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Choice 4</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>Question Number 2</Text>
          <RadioButton.Group 
  onValueChange={newValue => setAnswers({ ...answers, ans2: newValue })} 
  value={answers.ans2}
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice1" />
      <Text>Choice 1</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice2" />
      <Text>Choice 2</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice3" />
      <Text>Choice 3</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice4" />
      <Text>Choice 4</Text>
    </View>
  </View>
  </RadioButton.Group>

          
        </View>



        <View style={{marginBottom:30}}>
          <Text>Question Number 3</Text>
          <RadioButton.Group 
  onValueChange={newValue => setAnswers({ ...answers, ans3: newValue })} 
  value={answers.ans3}
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice1" />
      <Text>Choice 1</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice2" />
      <Text>Choice 2</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice3" />
      <Text>Choice 3</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice4" />
      <Text>Choice 4</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>




        <View style={{marginBottom:30}}> 
          <Text>Question Number 4</Text>
          <RadioButton.Group 
  onValueChange={newValue => setAnswers({ ...answers, ans4: newValue })} 
  value={answers.ans4}
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice1" />
      <Text>Choice 1</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice2" />
      <Text>Choice 2</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice3" />
      <Text>Choice 3</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice4" />
      <Text>Choice 4</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>




        <View>
          <Text>Question Number 5</Text>
          <RadioButton.Group 
  onValueChange={newValue => setAnswers({ ...answers, ans5: newValue })} 
  value={answers.ans5}
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice1" />
      <Text>Choice 1</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice2" />
      <Text>Choice 2</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice3" />
      <Text>Choice 3</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="choice4" />
      <Text>Choice 4</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>

    

    </View>


    <TouchableOpacity onPress={handleSubmit} style={{width:"100%",height:60,backgroundColor:"red",alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"white",fontSize:20,fontWeight:"900"}}>SUBMIT</Text>
    </TouchableOpacity>


    

    
</ScrollView> 
  )
}


export default ModuleQuiz4Container