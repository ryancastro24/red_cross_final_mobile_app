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

const ModuleQuiz3Container = () => {
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
        body: JSON.stringify({moduleName:"Module3",totalScore:scoreArr,userId:userData?._id}),
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
          <Text>What is the first step in the "In-Hospital Chain of Survival"?</Text>
  <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans1: newValue })} 
      value={answers.ans1} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Rapid Defibrillation</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Immediate High-Quality CPR</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Surveillance and Prevention</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text> Advanced Life Support and Post-Arrest Care</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>Which of the following is NOT included in the "Out-of-Hospital Chain of Survival"?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans2: newValue })} 
      value={answers.ans2} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Basic and Advanced Emergency Medical Services</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Recognition and Activation of Emergency Response</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Surveillance and Prevention</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Immediate High-Quality CPR</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>What condition is described by the term "angina pectoris"?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans3: newValue })} 
      value={answers.ans3} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Heart attack due to narrowed coronary arteries</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Complete stopping of heart contractions</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Sudden and severe chest pain</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Irregular heart rhythms</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>




        <View style={{marginBottom:30}}> 
          <Text>When should Cardiopulmonary Resuscitation (CPR) be stopped according to the document?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans4: newValue })} 
      value={answers.ans4} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>When the patient shows signs of breathing and circulation</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>When the rescuer becomes exhausted</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>When the physician assumes responsibility</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text> All of the above</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>




        <View>
          <Text>What should you do if you encounter a victim who is less than 1 year old and in need of resuscitation?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans5: newValue })} 
      value={answers.ans5} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Use adult AED pads</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Use child AED pads if available, or adult pads with care</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Perform CPR without using AED</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Avoid using AED and only provide chest compressions</Text>
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


export default ModuleQuiz3Container