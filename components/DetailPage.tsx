import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { Characters } from "@/types/interface";
import MeshGradientBackground from "./MeshGradientBackground";
import { Image } from "expo-image";
export default function DetailPage({ character }: { character: Characters }) {
  const [activeTab, setActiveTab] = useState<string | undefined>("Parents");

  const tabs = [
    { label: "Parents", value: "Parents" },
    { label: "Name", value: "Name" },
    { label: "Age", value: "Age" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Parents":
        return (
          <View>
            <Text style={styles.contentText}>
              Father: {character.family?.father || "Unknown"}
            </Text>
            <Text style={styles.contentText}>
              Mother: {character.family?.mother || "Unknown"}
            </Text>
          </View>
        );
      case "Age":
        return (
          <View>
            <Text style={styles.contentText}>
              Part I: {character.personal.age?.["Part I"] || "Unknown"}
            </Text>
            <Text style={styles.contentText}>
              Part II: {character.personal.age?.["Part II"] || "Unknown"}
            </Text>
          </View>
        );
      case "Name":
        return (
          // <View>
          <Text style={styles.contentText}>
            {character.personal.titles?.[0] || "Unknown"}
          </Text>
          // </View>
        );
      default:
        return <Text style={styles.contentText}>Select a tab to see content.</Text>;
    }
  };

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
            {character.personal.sex || "Unknown"}
          </Text>
          <Text style={styles.rating}>
            🏞 {character.personal.clan || "There is no clan"}
          </Text>

          <View style={styles.tabs}>
            {tabs.map(tab =>
              <TouchableOpacity
                key={tab.value}
                style={[
                  styles.tabButton,
                  activeTab === tab.value && styles.activeTab
                ]}
                onPress={() => setActiveTab(tab.value)}
              >
                <Text style={styles.tabText}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.content}>
            {renderContent()}
          </Text>
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
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#444",
    marginBottom: 20
  },
  activeTab: {
    backgroundColor: "#e63946"
  },
  tabText: {
    color: "#FFF",
    fontWeight: "bold"
  },
  content: {
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 10,
    width: "100%"
  },
  contentText: {
    marginBottom: 10,
    color: "white"
  }
});
