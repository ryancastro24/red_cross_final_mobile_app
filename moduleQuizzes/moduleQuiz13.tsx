import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


type UserDataPropType = {
  _id: string;
  // You can add more properties if needed
} | null;


// Assuming moduleDataResult has a defined type, for example:
interface ModuleDataResult {
  totalScore?: string[]; // Optional array of strings representing scores
}

interface Props {
  moduleDataResult: ModuleDataResult | null; // moduleDataResult can be of type ModuleDataResult or null
}

const ModuleQuiz13Container = () => {
  const [userData, setUserData] = useState<UserDataPropType>(null); 
  const [submitDone,setSubmitDone] = useState(false);
  const [moduleDataResult,setModuleDataResult] = useState<ModuleDataResult>()
  const [loading,setLoading] = useState(false);
  const [answers, setAnswers] = useState<any>({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
  });

 

 
  const handleSubmit = async() => {
    const scoreArr: any = [];

    for (let i = 1; i <= 5; i++) {
      if (answers[`ans${i}`] === "1") {
        scoreArr.push("1");
      } else {
        scoreArr.push("0");
      }
    }



    setLoading(true);


    try {
   
      const response = await fetch('https://red-cross-api-final.onrender.com/api/modules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({moduleName:"Module13",totalScore:scoreArr,userId:userData?._id}),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      
      if(data){
        setModuleDataResult(data);
        setSubmitDone(true);
        setLoading(false);
      }



    } catch (error) {
      console.error('Error:', error);
    }

   
  };






  // get the user data

  async function getData() {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch('https://red-cross-api-final.onrender.com/api/user/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();


      const finalUserData = data.data;
      console.log(finalUserData);
      setUserData(finalUserData);
    } catch (error) {
      console.error('Error:', error);
    }
  }



  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const totalScoreSum = moduleDataResult?.totalScore?.reduce((acc, val) => acc + Number(val), 0);


  return (
    <ScrollView>


    {submitDone ? 


    <View style={{flex:1,alignItems:"center",paddingVertical:100}}>
      <Text style={{fontSize:20,fontWeight:"300"}}>Here is the Result:</Text>
      <Text style={{fontSize:60,marginTop:20,fontWeight:"900"}}>{totalScoreSum} out of 5</Text>
      <Text style={{fontSize:20,marginTop:30}}>{totalScoreSum === 5 ? "PERFECT! 🥳" : 
          totalScoreSum === 4 ? "GREAT JOB 🥰" :
          totalScoreSum === 3 ? "GOOD ENOUGH 😊" :
          totalScoreSum === 2 ? "NICE TRY 🥺" :
          totalScoreSum === 1 ? "SORRY FOR YOUR LOSE 😢" : "LOSER! 😭"
        }
      </Text>

      
    </View>

:
    
<>

    <View style={{padding:20}}>

        <View style={{marginBottom:30}}>
          <Text>What is the main objective of lifting and carrying patients?</Text>
  <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans1: newValue })} 
      value={answers.ans1} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>To ensure the patient is moved as quickly as possible</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="1" />
      <Text>To move a patient to safety without causing injury to either the patient or the first aider</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>To use the most advanced equipment available</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="0-3" />
      <Text>To ensure the patient is moved in the most comfortable way possible</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>When should an Emergency Move be performed?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans2: newValue })} 
      value={answers.ans2} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>When the patient is stable and the scene is safe</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>When both the scene and the patient are stable</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 ,paddingRight:40}}>
      <RadioButton value="1" />
      <Text>When there is immediate danger and the patient needs to be moved to a safer place</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="0-3" />
      <Text>When you are waiting for medical professionals to arrive</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>Which of the following is NOT a guideline for lifting and moving patients?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans3: newValue })} 
      value={answers.ans3} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Bend your body at the knees and hips</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Lift with your back</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Walk carefully using short steps</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Support the victim’s head, neck, and back if necessary</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>




        <View style={{marginBottom:30}}> 
          <Text>What is a key guideline for moving a patient who is lying supine?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans4: newValue })} 
      value={answers.ans4} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Lift and carry the patient’s head and legs separately</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Avoid bending or twisting the patient</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="1" />
      <Text>Use the log-roll technique to place a blanket or spine board under the patient</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Only move the patient if you have a partner</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>




        <View>
          <Text>Which lifting and moving technique involves dragging the patient by their ankles?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans5: newValue })} 
      value={answers.ans5} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Chair Carry</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Blanket Carry</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Ankle Drag</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Extremity Carry</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>

    

    </View>



    <TouchableOpacity onPress={handleSubmit} style={{width:"100%",height:60,backgroundColor:"red",alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"white",fontSize:20,fontWeight:"900"}}>SUBMIT</Text>
    </TouchableOpacity>

</>
}

    
</ScrollView> 
  )
}


export default ModuleQuiz13Container