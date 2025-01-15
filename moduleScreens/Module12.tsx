import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
const Module12 = ({ moduleId }: { moduleId: number }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 10 }}>
        <View style={{ gap: 10 }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Emegency Preparedness
          </Text>
          <Text style={{ fontSize: 22, marginTop: 15 }}>
            Emergency Evacuation Drill
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            A physical or mental exercise aimed at perfecting facility or skill
            especially by regular practice.
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 22 }}>Three types of Drill</Text>
          <View style={{ gap: 8, paddingLeft: 8 }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              1.Scheduled Drill
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              2.Unannounced Drill
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              3.In-Services Drills
            </Text>
          </View>
        </View>

        <View style={{ gap: 10, marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Emergency Childbirth
          </Text>

          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Emergency Childbirth occurs when delivery is unexpectedly and you
            cannot get medical help in time.
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 22 }}>Causes of Emergency Childbirth</Text>
          <View style={{ gap: 8 }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Rapture tubal pregnancy with concealed haemorrhage into the
              abdominal cavity.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Unsual bleeding from the vagina at any stage.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Convusions associated with pregnancy.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Miscalculations in the anticipated delivery.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Premature onset of labor after an accident.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Delay in transportation.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Other factors which may abbreviate delivery.
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "#7E0303",
            padding: 12,
            borderRadius: 6,
          }}
        >
          <Text style={{ fontSize: 22, fontFamily: "Poppins", color: "white" }}>
            Signs and Symptoms
          </Text>

          <View style={{ gap: 8, marginTop: 15 }}>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - If labor contractions are approximately 2 minutes apart
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - If the woman is straining or pushing down with contractions
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - If the woman is crying out constantly
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Warning from the woman that the baby is coming
            </Text>
          </View>
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
              Materials and supplies needed:
            </Text>
          </View>

          <View style={{ gap: 10, padding: 10 }}>
            <Text style={{ fontSize: 22, fontFamily: "Poppins" }}>
              At home en route to the hospital
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Assemble clean cloth, plastic bags or other materials to protect
              bed clothes or car uphoistery
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Clean towels, one or two folded sheets
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Set of sterile cord ties or sterilized shoelaces.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - New razor blade in protective paper.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Diaper
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Alcohol
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Sanitary napkins
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Recieving blanket for the baby
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Safety pins
            </Text>
          </View>

          <View style={{ gap: 10, padding: 10 }}>
            <Text style={{ fontSize: 22, fontFamily: "Poppins" }}>
              For a long automobile ride:
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - The mother should wear a nightgown or slip a robe (no other
              underclothing) and place a sanitary napkin or clean folded towel
              between her tights if the bag of water has broken or if the blood
              and mucuos are draining from the birth canal.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Take along flashlight , if the trip will be at night.
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Blanket and pillow
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                fontFamily: "Poppins",
              }}
            >
              - Container of some sort for the after birth.
            </Text>
          </View>
        </View>

        <View style={{ gap: 10, marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Aquatic Emergencies
          </Text>

          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            An emegency can happen to anyone in, on or aroudn water. Regardless
            of how good a person is at swimming, anyone can ge into trouble
            because of a sudden illness or injury.
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "#7E0303",
            padding: 12,
            borderRadius: 6,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
            Causes of Drowning
          </Text>

          <View style={{ gap: 8, marginTop: 15 }}>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Panic
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Exhaustion in the water
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Losing control and getting swept into water that is too deep
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Losing support (as in a sinking boat)
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Getting trapped or entangled in the water
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Using drugs or alcohol before getting into the water
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Suffering from a medical emergency while in the water
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Using poor judgement while in the water
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Hypothermia
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Trauma
            </Text>
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Poppins" }}
            >
              - Having a diving accident
            </Text>
          </View>
        </View>

        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 22 }}>Emergency Actions</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Near-Drowning
          </Text>

          <View style={{ paddingLeft: 8, gap: 8 }}>
            <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
              - Make sure that the scene is safe
            </Text>
            <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
              - Always check first to see whether a lifeguard or other trained
              professional is present before helping someone who may be having
              trouble in the water.{" "}
            </Text>
            <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
              - DO NOT swim out to a victim unless you have the proper training,
              skills and equipment.
            </Text>
            <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
              - If the appropriate safety equipment is not available and there
              is a chance that you cannot safely help a person in trouble, call
              for help immediately.
            </Text>
            <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
              - If you must assist someone who is having trouble in the water,
              tou must have the appropriate equipment both for your own safety
              and the victim's
            </Text>
            <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
              - Send someone else to call the local emergency number while you
              start the rescue.
            </Text>
          </View>

          <View style={{ gap: 8, marginTop: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Submerged Victim
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins",
                textAlign: "justify",
              }}
            >
              If a victim is not near the bottom of the pool in deep water, call
              for trained help immediately.
            </Text>

            <View style={{ gap: 8 }}>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                - If the victim is in shallow water that is less than chest
                deep, carefully wade into the water with some kind of flotation
                equipment.{" "}
              </Text>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                - Reach down and grasp the victim
              </Text>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                - Pull the victim to the surface
              </Text>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                - Turn the victim face-up and bring him on her to safety.
              </Text>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                - Remove the victim from the water.
              </Text>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                - Provide emergency care.
              </Text>
            </View>
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

export default Module12;
