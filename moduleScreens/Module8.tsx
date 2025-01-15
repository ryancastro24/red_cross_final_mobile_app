import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
const Module8 = ({ moduleId }: { moduleId: number }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 8 }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Types
          </Text>
        </View>

        <View style={{ gap: 8, marginTop: 15 }}>
          <Text style={{ fontSize: 22, fontFamily: "Poppins" }}>
            Head Injury
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            A head injury is potentially dangerous,if not properly treated,
            injuries that seem minor could become life threatening. Head
            injuries include scalp wounds , skull fructures and brain injuries.
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 22, fontFamily: "Poppins" }}>
            Concussion
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            A concussion involves a temporary loss of brain function from a blow
            received by a victim to the head. Loss of consciousness may not
            always occur, but it's after-effects can be easily recognized.
          </Text>
        </View>

        <Image
          style={{ width: "100%", height: 180, marginTop: 20 }}
          source={require(`../assets/images/head injury.jpg`)}
        />

        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 22, fontFamily: "Poppins" }}>
            Spinal Injury{" "}
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Spine injuries often fracture the vertebrate and sprain the
            ligaments
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: 5,
            marginTop: 20,
          }}
        >
          <View
            style={{ width: "100%", backgroundColor: "#7E0303", padding: 12 }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins",
                textAlign: "center",
                color: "white",
              }}
            >
              Prevent injuries to the head, neck and back by practicing these
              safety guidelines:{" "}
            </Text>
          </View>

          <View style={{ gap: 10, padding: 10 }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Wear safety belts (lap and shoulders restraints) and place
              children in car safety seats
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Wear approved helmets, eyewear, faceguards and mouth guards{" "}
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Climb steps carefully to prevent slipping or falling{" "}
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Obey rules in sports and recreational activities
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Avoid inappropriate alcohol use
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Inspect work and recreational equipment regularly
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Think and talk about safety.
            </Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            router.push("/moduleQuizContainer/[id]");
            router.setParams({ moduleId: moduleId.toString() });
          }}
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            marginTop: 30,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins" }}>
            TAKE THE QUIZ
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Module8;
