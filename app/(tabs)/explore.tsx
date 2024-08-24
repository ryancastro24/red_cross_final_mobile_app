import { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [userAssessment, setUserAssessment] = useState<UserAssessmentProptype | null>(null); // Initialize with null
  const [userAssessmentFlag, setUserAssessmentFlag] = useState(false);

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

      if (!response.ok) {
        setUserAssessmentFlag(true);
      }

      const data = await response.json();

      console.log(`certificate data: ${JSON.stringify(data, null, 2)}`);
      setUserData(data.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
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
    <View style={{ width: '100%', height: 200, flex: 1, padding: 10, paddingVertical: 50 }}>
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
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <Text style={{fontSize:30,fontWeight:"200"}}>Not Evaluated Yet! 🥺</Text>
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 18 }}>
            <Text style={{ fontWeight: '900' }}>First Aid</Text>: {userAssessment?.firsAid}
          </Text>
          <Text style={{ fontSize: 18 }}>
            <Text style={{ fontWeight: '900' }}>CPR</Text>: {userAssessment?.cpr}
          </Text>
          <Text style={{ fontSize: 18 }}>
            <Text style={{ fontWeight: '900' }}>Pathogen</Text>: {userAssessment?.pathogen}
          </Text>
          <Text style={{ fontSize: 18 }}>
            <Text style={{ fontWeight: '900' }}>Preparedness</Text>: {userAssessment?.preparedness}
          </Text>
          <Text style={{ fontSize: 18 }}>
            <Text style={{ fontWeight: '900' }}>Team Work</Text>: {userAssessment?.teamwork}
          </Text>
        </View>
      )}
    </View>
  );
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
