import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ModuleDataPropType = {
  moduleName: string;
  totalScore: any[] | null;
  userId: string | null;
};

type UserDataPropType = {
  _id: string;
  // You can add more properties if needed
} | null;

const ModuleQuiz1Container = () => {
  const [userData, setUserData] = useState<UserDataPropType>(null);
  const [moduleData, setModuleData] = useState<ModuleDataPropType>({
    moduleName: "Module1",
    totalScore: null,
    userId: null, // Initially set to null
  });

  const [answers, setAnswers] = useState<any>({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
  });

 

   const  handleSubmitData = async() => {
    try {
   
      const response = await fetch('https://red-cross-api-final.onrender.com/api/modules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(moduleData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log('Module Data',data);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleSubmit = () => {
    const scoreArr: any = [];

    for (let i = 1; i <= 5; i++) {
      if (answers[`ans${i}`] === "1") {
        scoreArr.push("1");
      } else {
        scoreArr.push("0");
      }
    }

    setModuleData((prevModuleData) => ({
      ...prevModuleData,
      totalScore: scoreArr,
      userId: userData?._id ?? null, // Update userId with userData._id if available
    }));



    console.log(moduleData)

    handleSubmitData()
  };

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

  // Use useEffect to update moduleData when userData changes
  useEffect(() => {
    if (userData) {
      setModuleData((prevModuleData) => ({
        ...prevModuleData,
        userId: userData._id, // Update userId when userData is fetched
      }));
    }
  }, [userData]);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );


  return (
    <ScrollView>
    <View style={{padding:20}}>

        <View style={{marginBottom:30}}>
          <Text>Question Number 1</Text>
  <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans1: newValue })} 
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
     onValueChange={(newValue) => setAnswers({ ...answers, ans2: newValue })} 
      value={answers.ans2} // Directly use answers.ans1 as the value 
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
          <Text>Question Number 3</Text>
          <RadioButton.Group 
     onValueChange={(newValue) => setAnswers({ ...answers, ans3: newValue })} 
      value={answers.ans3} // Directly use answers.ans1 as the value 
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
          <Text>Question Number 4</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans4: newValue })} 
      value={answers.ans4} // Directly use answers.ans1 as the value 
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




        <View>
          <Text>Question Number 5</Text>
          <RadioButton.Group 
      onValueChange={(newValue) => setAnswers({ ...answers, ans5: newValue })} 
      value={answers.ans5} // Directly use answers.ans1 as the value 
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

    

    </View>


    <TouchableOpacity onPress={handleSubmit} style={{width:"100%",height:60,backgroundColor:"red",alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"white",fontSize:20,fontWeight:"900"}}>SUBMIT</Text>
    </TouchableOpacity>


    

    
</ScrollView> 
  )
}


export default ModuleQuiz1Container