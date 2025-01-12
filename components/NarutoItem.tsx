import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Characters } from "@/types/interface";

const NarutoItem: React.FC<{ item: Characters }> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          {item.name}
        </Text>
      </View>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#9AA6B270",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    height: 300
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  nameContainer: {
    padding: 5
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 10
  }
});

export default NarutoItem;
