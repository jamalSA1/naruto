import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import React from "react";
import { Characters } from "@/types/interface";

export default function DetailPage({ character }: { character: Characters }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: character.images[0] }} style={styles.image} />
      <Text style={styles.name}>
        {character.name}
      </Text>
      <View style={styles.familyInfo}>
        <Text style={styles.father}>
          Father:{" "}
          {character.family ? character.family.father || "Nothing" : "Nothing"}
        </Text>
        <Text style={styles.mother}>
          Mother:{" "}
          {character.family ? character.family.mother || "Nothing" : "Nothing"}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 10,
    paddingTop: 20
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black"
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10
  },
  familyInfo: {
    marginTop: 8,
    gap: 3
  },
  father: {
    fontSize: 15,
    color: "gray"
  },
  mother: {
    fontSize: 15,
    color: "gray"
  }
});
