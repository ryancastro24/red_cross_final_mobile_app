import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native-paper";

const MainPage = () => {
  const router = useRouter();

  // functions and declarations
  const navigation = useNavigation();

  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    console.log(email, password);
    const userData = {
      email,
      password,
    };

    fetch("https://red-cross-api-final.onrender.com/api/user/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          Alert.alert("Logged In Successfully");
          AsyncStorage.setItem("token", data.data);
          AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
          router.replace("/(tabs)");

          setLoading(false);
        } else if (data.data === "User doesn't exists!!") {
          Alert.alert(`User doesn't exist!!`);
          setLoading(false);
        } else if (data.error === "incorrect password") {
          Alert.alert(`Incorrect password`);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // frontend

  return (
    <View style={styles.container}>
      <Image
        style={styles.coverPhoto}
        alt="cover"
        source={require("../assets/images/red_cross_login_photo.jpg")}
      />
      <View style={styles.innerContainer}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Image
            style={styles.logo}
            alt="logo"
            source={require("../assets/images/red_cross_logo-removebg-preview.png")}
          />
        </View>

        <TextInput
          onChange={(e) => setEmail(e.nativeEvent.text)}
          placeholder="Enter Email"
          style={styles.input}
        />

        <TextInput
          onChange={(e) => setPassword(e.nativeEvent.text)}
          keyboardType="default"
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.input}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins" }}>
            {loading ? <ActivityIndicator color="white" /> : "LOGIN"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/forgotPassword")}>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              marginTop: 10,
              fontFamily: "Poppins",
              textAlign: "right",
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; //emd of my component

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  innerContainer: {
    width: 300,
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "rgba(255, 255, 255, 0.40)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.24)",
    paddingVertical: 35,
    paddingHorizontal: 15,
  },

  logo: {
    width: 140,
    height: 140,
  },
  input: {
    height: 50,
    marginBottom: 2,
    paddingHorizontal: 10,
    borderRadius: 3,
    fontSize: 16,
    backgroundColor: "white",
    fontFamily: "Poppins",
  },
  button: {
    height: 60,
    backgroundColor: "red",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  coverPhoto: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -10,
  },
});
