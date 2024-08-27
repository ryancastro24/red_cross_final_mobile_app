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

const ModuleQuiz2Container = () => {
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
        body: JSON.stringify({moduleName:"Module2",totalScore:scoreArr,userId:userData?._id}),
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
          <Text>What should be included in the "Scene Size-up" when arriving at an emergency scene?</Text>
  <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans1: newValue })} 
      value={answers.ans1} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Scene Safety</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Cause of Injury</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Role of Bystanders</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>All of the above</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>What is the purpose of the AVPU mnemonic in primary assessment?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans2: newValue })} 
      value={answers.ans2} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>To assess the level of consciousness</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>To measure pulse rate</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>To determine blood pressure</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>To check for breathing</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>What is the main difference between "Call First" and "Care First" situations?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans3: newValue })} 
      value={answers.ans3} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap:2,paddingRight:40 }}>
      <RadioButton value="0-1" />
      <Text>"Call First" is for breathing emergencies, and "Care First" is for cardiac emergencies</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="1" />
      <Text>"Call First" is for cardiac emergencies where time is critical, and "Care First" is for conditions related to breathing</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="0-2" />
      <Text>"Call First" involves calling emergency services after providing care, and "Care First" involves immediate care without calling</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="0-3" />
      <Text>There is no difference between "Call First" and "Care First"</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>




        <View style={{marginBottom:30}}> 
          <Text>What are some key elements to include when activating medical help?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans4: newValue })} 
      value={answers.ans4} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Cause and extent of injury</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Location of emergency</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Number of persons injured</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>All of the above</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>




        <View>
          <Text>What does the SAMPLE approach help assess in a patient’s medical history?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans5: newValue })} 
      value={answers.ans5} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="1" />
      <Text>Symptoms, Allergies, Medications, Past Medical History, Last Intake, and Events Leading Up to the Injury</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="0-2" />
      <Text>Signs, Actions, Medications, Previous Conditions, Lifestyle, and Environment</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="0-1" />
      <Text>Symptoms, Actions, Medication History, Previous Surgeries, Lifestyle, and Emergencies</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2,paddingRight:40 }}>
      <RadioButton value="0-3" />
      <Text>None of the above</Text>
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


export default ModuleQuiz2Container