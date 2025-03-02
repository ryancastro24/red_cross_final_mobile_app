import { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProgressBar, MD3Colors } from "react-native-paper";
type UserPropType = {
  _id: string;
  name: string;
  address: string;
  email: string;
  __v: number;
  id: string;
  certificateUrl: string;
  certificateApproved: boolean;
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

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const response = await fetch(
        "https://red-cross-api-final.onrender.com/api/user/userData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: token }),
        }
      );

      const data = await response.json();

      console.log(`certificate data: ${JSON.stringify(data, null, 2)}`);
      setUserData(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch userData when the screen is focused
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const downloadCertificate = async () => {
    const filename = "certificate.pdf";
    const result = await FileSystem.downloadAsync(
      userData!.certificateUrl,
      FileSystem.documentDirectory + filename
    );
    console.log(result);
    save(result.uri);
  };

  const save = async (uri: string) => {
    shareAsync(uri);
  };

  return (
    <ScrollView>
      <View
        style={{ width: "100%", flex: 1, padding: 10, paddingVertical: 50 }}
      >
        <TouchableOpacity
          disabled={userData?.certificateUrl == ""}
          onPress={downloadCertificate}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 10,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            source={require(`../../assets/images/sampleCert.jpg`)}
          />

          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "#282828",
              zIndex: 10,
              opacity: 0.8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "900" }}>
              {userData?.certificateUrl == "" ? "LOCKED" : "DOWNLOAD NOW"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
