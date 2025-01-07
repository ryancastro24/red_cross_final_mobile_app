import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
const Module1 = ({ moduleId }: { moduleId: number }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 7 }}>
        <Text style={styles.subheader}>First Aid</Text>
        <Image
          style={{ width: "100%", height: 180 }}
          source={require(`../assets/images/first aid.jpg`)}
        />

        <Text style={styles.p}>
          Is an immediate help provided to a sick or injured person until
          professional medical help arrives or becomes available.
        </Text>

        <View
          style={{
            width: "100%",
            backgroundColor: "#7E0303",
            borderRadius: 4,
            padding: 12,
          }}
        >
          <Text style={{ fontSize: 23, fontWeight: "bold", color: "white" }}>
            Scope and Limitation
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              lineHeight: 20,
              marginTop: 7,
              textAlign: "justify",
            }}
          >
            First aid does not imply medical treatment and is by no means a
            replacement for it.
          </Text>
        </View>

        <View style={{ marginTop: 25, gap: 7 }}>
          <Text style={{ ...styles.p, fontSize: 22, fontWeight: "bold" }}>
            Basic Life Support
          </Text>
          <Text style={styles.p}>
            An emergency procedure that consists of recognizing respiratory or
            cardiac arrest or both and the proper application of CPR to maintain
            life until a victim recovers or advanced life support is available.
          </Text>
        </View>

        <Image
          style={{ width: "100%", height: 180 }}
          source={require(`../assets/images/Cardiac arrest1.png`)}
        />

        <View style={{ marginTop: 25, gap: 7 }}>
          <Text style={styles.p}>Objectives of First Aid</Text>
          <Text style={styles.p}>- Preserve Life</Text>
          <Text style={styles.p}>- Prevent further harm and complications</Text>
          <Text style={styles.p}>- Seek immediate medical help</Text>
          <Text style={styles.p}>- Provide Reassurance</Text>
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
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              According to Article 12 no.4 of Act No.3815 of the Philippine
              Revised Penal Code Book One
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.p}>
              "any person who, while performing a lawful act with due care,
              causes an injury by mere accident without fault or intention of
              causing it” is exempt from criminal liability.
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 25, gap: 7 }}>
          <Text style={styles.p}>Legal Concerns</Text>
          <Text style={styles.p}>- Consent</Text>
          <Text style={styles.p}>- Duty to Act</Text>
          <Text style={styles.p}>- Negligence</Text>
          <Text style={styles.p}>- Confidentiality</Text>
          <Text style={styles.p}>- Abandonment</Text>
        </View>

        <View
          style={{
            width: "100%",
            borderWidth: 1,
            marginBottom: 20,
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
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              According to Article 275 Nos. 1 & 2 of Act No. 3815 of the
              Philippine Revised Penal Code Book Two: "Abandonment of person in
              danger and abandonment of one's own victim."
            </Text>
          </View>
          <View style={{ padding: 10, gap: 7 }}>
            <Text style={styles.p}>
              1. Anyone who shall fail to render assistance to any person whom
              he shall in an uninhabited place wounded or in danger of dying,
              when he can render such assistance without detriment to himself,
              unless such omission shall constitute a more serious offense.
            </Text>
            <Text style={styles.p}>
              2. Anyone who shall fail to help or render assistance to another
              whom he has accidentally wounded or injured.
            </Text>
          </View>
        </View>

        <Text style={styles.subheader}>Health Hazards and Risks</Text>
        <Text style={{ fontSize: 22 }}>Common Transmittable Diseases</Text>

        <Text style={styles.p}>
          Helping others is not without risks and hazards, most important of
          which is the risk of contracting an infectious disease. Infectious
          diseases are those that can spread from one person to another and
          develop when germs invade the body and cause illness.
        </Text>

        <View
          style={{
            width: "100%",
            backgroundColor: "#7E0303",
            borderRadius: 4,
            padding: 12,
          }}
        >
          <Text style={{ fontSize: 23, fontWeight: "bold", color: "white" }}>
            Dieseas Transmission
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 20,
              marginTop: 7,
              textAlign: "justify",
              color: "white",
            }}
          >
            Infectious diseases are those that can spread from one person to
            another through the following ways:{" "}
          </Text>
          <View style={{ marginTop: 10, gap: 7 }}>
            <Text style={{ fontSize: 16, color: "white" }}>
              - Direct contact
            </Text>
            <Text style={{ fontSize: 16, color: "white" }}>
              - Indirect contact
            </Text>
            <Text style={{ fontSize: 16, color: "white" }}>
              - Airborne transmission
            </Text>
            <Text style={{ fontSize: 16, color: "white" }}>- Bites</Text>
          </View>
        </View>

        <View style={{ gap: 5, alignItems: "center", marginBottom: 20 }}>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require(`../assets/images/herpes.jpg`)}
          />
          <Text style={styles.p}>Herpes</Text>
        </View>

        <View style={{ gap: 5, alignItems: "center", marginBottom: 20 }}>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require(`../assets/images/miningitis.jpg`)}
          />
          <Text style={styles.p}>Meningitis</Text>
        </View>

        <View style={{ gap: 5, alignItems: "center", marginBottom: 20 }}>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require(`../assets/images/tuberculosis.jpg`)}
          />
          <Text style={styles.p}>Tuberculosis</Text>
        </View>

        <View style={{ gap: 5, alignItems: "center", marginBottom: 20 }}>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require(`../assets/images/hepatitis.jpg`)}
          />
          <Text style={styles.p}>Hepatitis</Text>
        </View>

        <View style={{ gap: 5, alignItems: "center", marginBottom: 20 }}>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require(`../assets/images/hiv.jpg`)}
          />
          <Text style={styles.p}>Human Immune Deficiency Virus</Text>
        </View>

        <View style={{ gap: 7 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "white " }}>
            Prevention and Protection
          </Text>
          <Text style={styles.p}>
            Universal Precautions are set of strategies developed to prevent
            transmission of blood borne pathogens. Body Substance Isolation
            (BSI) are precautions taken to isolate or prevent risk of exposure
            from body secretions and any other type of body substance such as
            urine, vomit, faeces, sweat, or sputum. Personal Protective
            Equipment (PPE) is specialized clothing, equipment and supplies that
            keep you from directly contacting infected materials.
          </Text>
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
          <Text style={{ color: "white", fontSize: 20 }}>TAKE THE QUIZ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Module1;

const styles = StyleSheet.create({
  subheader: {
    fontSize: 30,

    fontWeight: "900",
  },

  p: {
    fontSize: 16,
    lineHeight: 25,
    textAlign: "justify",
  },
});
