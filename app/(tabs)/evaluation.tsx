import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
const Item = ({ name, field, _id }: any) => (
  <TouchableOpacity
    onPress={() => {
      router.push("/evaluationForm");
      router.setParams({ id: _id, name: name, field: field });
    }}
    style={styles.cardContainer}
    key={_id}
  >
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={require("../../assets/images/avatar.png")}
      />
    </View>
    <View style={styles.cardTextContainer}>
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardField}>{field}</Text>
    </View>
  </TouchableOpacity>
);

const Evaluation = () => {
  const [instructors, setInstructors] = useState<any[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  async function getData() {
    try {
      const response = await fetch(
        "https://red-cross-api-final.onrender.com/api/instructors"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setInstructors(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const filteredInstructors = instructors?.filter(
    (instructor: any) =>
      instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.field.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (instructors === null) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <Text style={styles.header}>Evaluate Trainers</Text>

      <Searchbar
        placeholder="Search Instructor"
        onChangeText={setSearchQuery}
        value={searchQuery}
        theme={{ colors: { primary: "white" } }}
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          fontFamily: "Poppins",
        }}
        inputStyle={{ fontSize: 18, padding: 0 }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredInstructors}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default Evaluation;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 25,
    fontFamily: "Poppins",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  cardContainer: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    flexDirection: "row",
    gap: 15,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#dadada",
    overflow: "hidden",
    borderRadius: 120,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  cardTextContainer: {
    width: "75%",
    gap: 2,
  },
  cardName: {
    fontSize: 23,
    fontFamily: "Poppins",
    color: "#444242",
  },
  cardField: {
    fontSize: 16,
    fontFamily: "Poppins",
  },
});
