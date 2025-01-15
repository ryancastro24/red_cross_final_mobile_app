import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [newPasswordLoading, setNewPasswordLoading] = useState(false);
  const { email } = useLocalSearchParams();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [showPasswordChangedDisplay, setShowPasswordChangedDisplay] =
    useState(false);

  const handleSubmit = () => {
    setLoading(true);

    const userData = {
      email,
      password,
    };

    fetch(
      "https://red-cross-api-final.onrender.com/api/user/passwordApproval",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((response) => response.text()) // Fetch the response as text to debug
      .then((data) => {
        try {
          if (data === "approved") {
            setLoading(false);
            setShowChangePassword(true);
            setIncorrectPassword(false);
          }
          if (data === "denied") {
            setLoading(false);
            setPassword("");
            setIncorrectPassword(true);
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error("JSON Parsing Error:", error.message); // Now TypeScript knows `error` has a `message`
          } else {
            console.error("Unknown error:", error); // In case it's not an instance of Error
          }
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setLoading(false); // Stop loading if there's a fetch error
      });
  };

  const handleSubmitNewPassword = () => {
    setNewPasswordLoading(true);

    const userData = {
      email,
      newPassword,
    };

    fetch("https://red-cross-api-final.onrender.com/api/user/changePassword", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.text()) // Fetch the response as text to debug
      .then((data) => {
        try {
          if (data === "Password updated successfully") {
            setNewPasswordLoading(false);
            setShowPasswordChangedDisplay(true);
          } else {
            setNewPasswordLoading(false);
            setNewPassword("");
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error("JSON Parsing Error:", error.message); // Now TypeScript knows `error` has a `message`
          } else {
            console.error("Unknown error:", error); // In case it's not an instance of Error
          }
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setLoading(false); // Stop loading if there's a fetch error
      });
  };

  return (
    <View style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
      <View>
        <Text
          style={{ fontSize: 18, fontWeight: "300", fontFamily: "Poppins" }}
        >
          Enter Password to Confirm
        </Text>
        <TextInput
          placeholder="Enter Password"
          style={{
            fontSize: 18,
            backgroundColor: "white",
            height: 45,
            padding: 10,
            marginTop: 10,
            borderRadius: 2,
            fontFamily: "Poppins",
          }}
          onChangeText={(text) => setPassword(text)} // Update state when the input changes
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: showChangePassword ? "gray" : "red",
            height: 60,
            marginTop: 10,
          }}
          disabled={showChangePassword}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "900",
              fontSize: 18,
              fontFamily: "Poppins",
            }}
          >
            {loading ? "LOADING..." : "CONFIRM PASSWORD"}
          </Text>
        </TouchableOpacity>
        {incorrectPassword && (
          <Text
            style={{
              color: "red",
              fontSize: 18,
              marginTop: 10,
              fontFamily: "Poppins",
            }}
          >
            Incorrect Password, Try again!
          </Text>
        )}
      </View>

      {showChangePassword && (
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 18, fontWeight: "300" }}>New Password</Text>
          <TextInput
            placeholder="Enter New Password"
            style={{
              fontSize: 18,
              backgroundColor: "white",
              height: 45,
              padding: 10,
              marginTop: 10,
              borderRadius: 2,
            }}
            onChange={(e) => setNewPassword(e.nativeEvent.text)}
            value={newPassword}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={handleSubmitNewPassword}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: showPasswordChangedDisplay ? "gray" : "red",
              height: 60,
              marginTop: 10,
            }}
            disabled={showPasswordChangedDisplay}
          >
            <Text
              style={{ color: "white", fontFamily: "Poppins", fontSize: 18 }}
            >
              {newPasswordLoading ? "LOADING..." : "CHANGE PASSWORD"}
            </Text>
          </TouchableOpacity>

          {showPasswordChangedDisplay && (
            <Text
              style={{
                color: "white",
                backgroundColor: "yellowgreen",
                textAlign: "center",
                padding: 15,
                fontSize: 25,
                fontWeight: "900",
                borderRadius: 5,
                marginTop: 20,
                fontFamily: "Poppins",
              }}
            >
              PASSWORD CHANGED! 🥰
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default ChangePassword;
