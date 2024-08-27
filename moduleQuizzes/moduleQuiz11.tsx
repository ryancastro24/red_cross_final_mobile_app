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

const ModuleQuiz11Container = () => {
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
        body: JSON.stringify({moduleName:"Module11",totalScore:scoreArr,userId:userData?._id}),
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
          <Text>What is a symptom of Heat Exhaustion?</Text>
  <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans1: newValue })} 
      value={answers.ans1} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Absence of sweating</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Heavy sweating</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>High body temperature</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Red, hot, dry skin</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>What is the first aid management for Heat Stroke?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans2: newValue })} 
      value={answers.ans2} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="0-1" />
      <Text>Encourage the patient to drink a beverage containing salt</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Move the person into a cool place or shaded area</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Massage the affected muscle</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Keep the person in a hot environment</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>Which of the following is NOT a sign of Hypothermia?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans3: newValue })} 
      value={answers.ans3} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Shivering</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Red, hot, dry skin</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Numbness</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Weakness</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>




        <View style={{marginBottom:30}}> 
          <Text>How should you rewarm a person with Hypothermia?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans4: newValue })} 
      value={answers.ans4} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>By immersing them in warm water</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Rapidly with intense heat</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Gently by wrapping them in blankets</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Keeping them in wet clothing</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>




        <View>
          <Text>Which of the following describes Heat Cramps?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans5: newValue })} 
      value={answers.ans5} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>High body temperature with absence of sweating</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="1" />
      <Text>Painful involuntary muscle cramps during or after exercise in a hot environment</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>A general cooling of the entire body</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>A severe form of heat-related illness that causes hallucinations and confusion</Text>
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


export default ModuleQuiz11Container