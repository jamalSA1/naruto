import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import { Characters } from "@/types/interface";
import { Link } from "expo-router";

const NarutoItem: React.FC<{ item: Characters }> = ({ item }) => {
  return (
    <Link href={`/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: item.images[0] }}
            style={styles.image}
          >
            <View style={styles.nameContainer}>
              <Text style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.view}>View</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </Link>
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
    height: 300,
    overflow: "hidden"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    width: "auto",
    marginTop: 220,
    marginHorizontal: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  view: {
    fontSize: 13,
    color: "#BCCCDC"
  }
});

export default NarutoItem;
