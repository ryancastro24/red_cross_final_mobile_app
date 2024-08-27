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

const ModuleQuiz4Container = () => {
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
        body: JSON.stringify({moduleName:"Module4",totalScore:scoreArr,userId:userData?._id}),
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
          <Text>What is a common breathing emergency known as choking caused by?</Text>
  <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans1: newValue })} 
      value={answers.ans1} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Respiratory arrest</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Foreign-body airway obstructions</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Hyperventilation</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Asthma attack</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>Which type of airway obstruction allows a person to still talk, cough, and make wheezing sounds?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans2: newValue })} 
      value={answers.ans2} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Anatomical obstruction</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Mechanical obstruction</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Mild airway obstruction</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Severe airway obstruction</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>



        <View style={{marginBottom:30}}>
          <Text>Which of the following is NOT a cause of choking in adults?</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans3: newValue })} 
      value={answers.ans3} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Drinking alcohol</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Swallowing large pieces of poorly chewed food</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Performing rescue breathing</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Wearing dentures</Text>
    </View>
  </View>
</RadioButton.Group>

          
        </View>




        <View style={{marginBottom:30}}> 
          <Text>What is the term for a technique used to supply oxygen to a person who is not breathing but has a pulse?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans4: newValue })} 
      value={answers.ans4} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Chest thrust</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Back blows</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Hyperventilation</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Rescue breathing</Text>
    </View>
  </View>
</RadioButton.Group>
          
        </View>




        <View>
          <Text>Which of the following is a symptom of an asthma attack?</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans5: newValue })} 
      value={answers.ans5} // Directly use answers.ans1 as the value 
>
  <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="1" />
      <Text>Rapid shallow breathing</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-2" />
      <Text>Slow, deep breathing</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-1" />
      <Text>Strong, stable pulse</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <RadioButton value="0-3" />
      <Text>Full body paralysis</Text>
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


export default ModuleQuiz4Container