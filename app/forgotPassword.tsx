import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useRouter } from "expo-router";
const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState(""); // State to store the email input
  const [otpSent, setOtpSent] = useState(false); // State to track OTP sent
  const [otpConfirmed, setOtpConfirmed] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<TextInput | null>>([]); // Define type for ref array
  const [otpError, setOtpError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  // Function to handle the submit button click
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://red-cross-api-final.onrender.com/api/user/sendPasswordOtp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }), // Send the email in the request body
        }
      );

      const data = await response.json();

      if (data.error) {
        setEmailError(data.error);
        setLoading(false);
      } else if (data.message) {
        setLoading(false);
        setOtpSent(true); // Trigger OTP input display
      } else {
        console.error("Failed to send reset email.", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //  userOtp/confirmOtp
  // Function to handle OTP submission

  const handleOtpSubmit = async () => {
    setLoading(true);

    const otpData = otp.join("");
    if (otp.length === 6) {
      try {
        const response = await fetch(
          "https://red-cross-api-final.onrender.com/api/user/userOtp/confirmOtp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ otp: otpData, email: email }), // Send the OTP in the request body
          }
        );

        const data = await response.json();
        console.log(data);
        if (data.error) {
          setOtpError(data.error);
        } else {
          setLoading(false);
          setOtpConfirmed(true);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("OTP must be 6 digits.");
    }
  };

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return; // Prevent pasting multiple characters
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if a number is entered
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleSubmitNewPassword = () => {
    setLoading(true);

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
            setLoading(false);
            router.replace("/");
          } else {
            setLoading(false);
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
    <View style={styles.container}>
      {otpConfirmed ? (
        <View>
          <Text style={{ fontFamily: "Poppins", fontSize: 15 }}>
            New Password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="xxxxxxxx"
            value={newPassword} // Bind the email state to the input field
            onChangeText={(text) => setNewPassword(text)} // Update state when the input changes
            secureTextEntry
          />
          <TouchableOpacity
            onPress={handleSubmitNewPassword}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                "Change Password"
              )}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {otpSent ? (
            <View>
              <Text style={{ fontFamily: "Poppins" }}>
                An OTP was sent to {email}
              </Text>
              <Text
                style={{ fontFamily: "Poppins", marginTop: 15, fontSize: 20 }}
              >
                Enter the OTP:
              </Text>
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    style={styles.otpInput}
                    maxLength={1}
                    keyboardType="numeric"
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === "Backspace") {
                        handleBackspace(digit, index);
                      }
                    }}
                  />
                ))}
              </View>
              <TouchableOpacity onPress={handleOtpSubmit} style={styles.button}>
                <Text style={styles.buttonText}>
                  {loading ? <ActivityIndicator color="white" /> : "Submit OTP"}
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  fontFamily: "Poppins",
                  color: "red",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                {otpError}
              </Text>
            </View>
          ) : (
            <>
              <Text style={styles.header}>Forgot Password</Text>
              <Text style={styles.instructions}>
                Enter the active email of the account:
              </Text>

              <Text style={{ fontFamily: "Poppins", fontSize: 15 }}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="sample@gmail.com"
                value={email} // Bind the email state to the input field
                onChangeText={(text) => setEmail(text)} // Update state when the input changes
              />

              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>
                  {loading ? <ActivityIndicator color="white" /> : "Submit"}
                </Text>
              </TouchableOpacity>

              {emailError && (
                <Text
                  style={{
                    color: "red",
                    fontFamily: "Poppins",
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  {emailError}
                </Text>
              )}
            </>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontFamily: "Poppins",
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Poppins",
  },
  input: {
    height: 50,
    borderRadius: 3,
    borderColor: "gray",
    borderWidth: 0.5,
    marginBottom: 20,
    paddingLeft: 10,
    fontFamily: "Poppins",
    fontSize: 18,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 8,
    fontFamily: "Poppins",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins",
  },
});

export default ForgotPassword;
