import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BlurView } from "expo-blur";
import { Characters } from "@/types/interface";
import MeshGradientBackground from "./MeshGradientBackground";
import { Image } from "expo-image";
export default function DetailPage({ character }: { character: Characters }) {
  return (
    <MeshGradientBackground>
      <BlurView intensity={70} style={StyleSheet.absoluteFill}>
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: character.images[0] }}
            style={styles.mainImage}
          />
          <Text style={styles.title}>
            {character.name}
          </Text>
          <Text style={styles.details}>
            {character.personal.birthdate || "Unknown"} •{" "}
            {/* {character.personal.titles?.[0] || "Unknown"} */}
            {character.personal.sex || "Unknown"}
          </Text>
          <Text style={styles.rating}>
            🏞 {character.personal.clan}
          </Text>

          <View style={styles.tabs}>
            <Text style={[styles.tab, styles.activeTab]}>General</Text>
            <Text style={styles.tab}>Cast</Text>
            <Text style={styles.tab}>Comments</Text>
            <Text style={styles.tab}>Lists</Text>
          </View>
        </View>
      </BlurView>
    </MeshGradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  meshGradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1
  },

  contentContainer: {
    flex: 1,
    zIndex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 80
  },
  mainImage: {
    width: 250,
    height: 300,
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10
  },
  details: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 5
  },
  rating: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 20
  },
  tabs: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#444",
    borderRadius: 20,
    color: "white",
    fontSize: 14,
    textAlign: "center"
  },
  activeTab: {
    backgroundColor: "#e63946"
  }
});
