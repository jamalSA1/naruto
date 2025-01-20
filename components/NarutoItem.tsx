import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import { Characters } from "@/types/interface";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Image } from "expo-image";

const NarutoItem: React.FC<{ item: Characters }> = ({ item }) => {
  return (
    <Link href={`/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            source={{ uri: item.images[0] }}
            style={styles.backgroundImage}
            transition={1000}
            contentFit="cover"
            onLoad={() => {}}
          />
          <View style={styles.rowContainer}>
            <BlurView
              intensity={50}
              tint="dark"
              blurReductionFactor={50}
              style={[styles.nameContainer, { borderRadius: 50 }]}
            >
              <Image
                source={{
                  uri: item.images[1] || item.images[0]
                }}
                style={styles.mainImage}
              />
              <Text style={styles.name}>
                {item.name}
              </Text>
            </BlurView>
            <View style={{ flex: 0.8 }} />
            <View style={styles.viewContainer}>
              <Ionicons name="eye-outline" size={20} color="#9AA6B2" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "baseline",
    marginHorizontal: 10,
    padding: 10,
    height: 400,
    overflow: "hidden"
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 10
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 50,
    overflow: "hidden"
  },
  name: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    marginRight: 10
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden"
  },
  mainImage: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  viewContainer: {
    marginLeft: 20,
    backgroundColor: "white",
    height: 40,
    width: "auto",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50
  }
});

export default NarutoItem;
