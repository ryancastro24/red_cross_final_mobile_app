import { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProgressBar, MD3Colors } from 'react-native-paper';
type UserPropType = {
  _id: string;
  name: string;
  address: string;
  email: string;
  __v: number;
  id: string;
  certificateUrl: string;
  certificatedApproved: boolean;
};

type UserAssessmentProptype = {
  firsAid: string;
  cpr: string;
  pathogen: string;
  preparedness: string;
  teamwork: string;
};

export default function CertificateDownload() {

  
  const [userData, setUserData] = useState<UserPropType | null>(null); // Initialize with null to check if data is loaded
  const [loading, setLoading] = useState(true);
  const [userAssessment, setUserAssessment] = useState({} as UserAssessmentProptype); // Initialize with null
  const [userAssessmentFlag, setUserAssessmentFlag] = useState(false);


  const handleUserAssessmentProgressBar = (data:string) => {

    switch(data){
      case "excellent" :{
        return 1
      }
      break;
      case "good" :{ 
        return 0.75
      }
      break;
      case "satisfactory":{
        return 0.5
      }
      break;

      case "needs-improvement" :{
        return 0.25
      }
      break;

      case "unsatisfactory":{
        return 0.10
      }
      break;

    }
  }



  const ratingLabel = (rate:string) => {
    switch(rate) {
     case "unsatisfactory": {
       return "#FF0000"
     }
     break;
     case "needs-improvement": {
       return "#56423d"
     }
     break;
     case "satisfactory": {
       return "#bea6a0"
     }
     break;
     case "good": {
       return "#009700"
     }
     break;
     case "excellent": {
       return "#006100"
     }
     break;

    }
   }


  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch('https://red-cross-api-final.onrender.com/api/user/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token }),
      });

    

      const data = await response.json();

      console.log(`certificate data: ${JSON.stringify(data, null, 2)}`);
      setUserData(data.data);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getUserAssessmentData = async () => {
    try {
      if (!userData || !userData._id) return; // Ensure userData is loaded

      console.log('user id', userData._id);
      const response = await fetch(`https://red-cross-api-final.onrender.com/api/userAssessment/${userData._id}`);

      const data = await response.json();

      if (!response.ok) {
        console.log(`user assessment: ${data.message}`);
        setUserAssessmentFlag(true);
        console.log('i run flag');
      } else {
        console.log(`user assessment data: ${JSON.stringify(data, null, 2)}`);
        setUserAssessment(data);
        setUserAssessmentFlag(false)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fetch userData when the screen is focused
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  // Fetch userAssessmentData when userData is successfully loaded and is not null
  useEffect(() => {
    if (userData && userData._id) {
      getUserAssessmentData();
    }
  }, [userData]);

  const downloadCertificate = async () => {
    const filename = 'certificate.pdf';
    const result = await FileSystem.downloadAsync(userData!.certificateUrl, FileSystem.documentDirectory + filename);
    console.log(result);
    save(result.uri);
  };

  const save = async (uri: string) => {
    shareAsync(uri);
  };

  return (
    <ScrollView>
    <View style={{ width: '100%', flex: 1, padding: 10, paddingVertical: 50 }}>
      <TouchableOpacity
        disabled={!userData?.certificatedApproved}
        onPress={downloadCertificate}
        style={{ width: '100%', height: 250, borderRadius: 10, position: 'relative', overflow: 'hidden' }}
      >
        <Image
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          source={require(`../../assets/images/sampleCert.jpg`)}
        />

        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: '#282828',
            zIndex: 10,
            opacity: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '900' }}>
            {!userData?.certificatedApproved ? 'LOCKED' : 'DOWNLOAD NOW'}
          </Text>
        </View>
      </TouchableOpacity>

      {userAssessmentFlag ? (
        <View style={{flex:1,alignItems:"center",justifyContent:"center",marginTop:50}}>
          <Text style={{fontSize:30,fontWeight:"200"}}>Not Evaluated Yet! 🥺</Text>
        </View>
      ) : (
        <View style={{flex:1,alignItems:"center",justifyContent:"center",padding:30}}>
          <Text style={{fontSize:25,fontWeight:"200"}}>MY EVALUATION SCORE</Text>

        <View style={{flexDirection:"row",width:"100%",marginTop:30,alignItems:"center", justifyContent:"space-evenly"}}>
            
            <View style={{alignItems:"center",gap:2}}>
              <View style={{width:20,height:20,backgroundColor:"#ff0000",borderRadius:3}}></View>
              <Text>WORST</Text>
            </View>

            <View style={{alignItems:"center",gap:2}}>
              <View style={{width:20,height:20,backgroundColor:"#56423d",borderRadius:3}}></View>
              <Text>BAD</Text>
            </View>

            <View style={{alignItems:"center",gap:2}}>
              <View style={{width:20,height:20,backgroundColor:"#bea6a0",borderRadius:3}}></View>
              <Text>NEUTRAL</Text>
            </View>

            <View style={{alignItems:"center",gap:2}}>
              <View style={{width:20,height:20,backgroundColor:"#009700",borderRadius:3}}></View>
              <Text>GOOD</Text>
            </View>

            <View style={{alignItems:"center",gap:2}}>
              <View style={{width:20,height:20,backgroundColor:"#006100",borderRadius:3}}></View>
              <Text>EXCELLENT</Text>
            </View>
        </View>

        <View style={{gap:20,width:"100%",marginTop:30}} >

          <View style={{width:"100%",gap:5}}> 
            <Text style={{fontSize:18}}>First Aid Performance</Text>
            <ProgressBar style={{height:10,borderRadius:2}} progress={handleUserAssessmentProgressBar(userAssessment?.firsAid)} color={ratingLabel(userAssessment?.firsAid)} />
          </View>

          <View style={{width:"100%",gap:5}}> 
            <Text style={{fontSize:18}}>CPR Performance</Text>
            <ProgressBar style={{height:10,borderRadius:2}} progress={handleUserAssessmentProgressBar(userAssessment?.cpr)} color={ratingLabel(userAssessment?.cpr)} />
          </View>


          <View style={{width:"100%",gap:5}}> 
            <Text style={{fontSize:18}}>Pathogen Performance</Text>
            <ProgressBar style={{height:10,borderRadius:2}} progress={handleUserAssessmentProgressBar(userAssessment?.pathogen)} color={ratingLabel(userAssessment?.pathogen)} />
          </View>


          <View style={{width:"100%",gap:5}}> 
            <Text style={{fontSize:18}}>Preparedness in sessions</Text>
            <ProgressBar style={{height:10,borderRadius:2}} progress={handleUserAssessmentProgressBar(userAssessment?.preparedness)} color={ratingLabel(userAssessment?.preparedness)} />
          </View>


          <View style={{width:"100%",gap:5}}> 
            <Text style={{fontSize:18}}>Teamwork skill</Text>
            <ProgressBar style={{height:10,borderRadius:2}} progress={handleUserAssessmentProgressBar(userAssessment?.teamwork)} color={ratingLabel(userAssessment?.teamwork)} />
          </View>
            
        </View>
      </View>
      )
    }

  </View>

  </ScrollView>

  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
