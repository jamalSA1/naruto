import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Characters } from "@/types/interface";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Link } from "expo-router";

type FavoritesItemProps = {
  items: Characters;
  removeFavorite: () => void;
};

export default function FavoritesItem({
  items,
  removeFavorite
}: FavoritesItemProps) {
  return (
    <View style={styles.gridContainer}>
      <Link href={`/${items.id}`} asChild>
        <TouchableOpacity>
          <Image
            source={{ uri: items.images[0] }}
            style={{ width: 180, height: 200, borderRadius: 30 }}
            transition={1000}
          />
        </TouchableOpacity>
      </Link>
      <TouchableOpacity onPress={removeFavorite} style={styles.trashIcon}>
        <Ionicons name="trash-outline" size={23} color="#9AA6B2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
    position: "relative",
    borderRadius: 20,
    shadowColor: "#B7B7B7",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 5.84,
    elevation: 5
  },
  trashIcon: {
    position: "absolute",
    top: "75%",
    right: 10,
    backgroundColor: "#F4F6FF",
    borderRadius: 100,
    padding: 10
  }
});
