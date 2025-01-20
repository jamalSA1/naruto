import { Fontisto } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const FavoriteIcon = ({
  isFavorite,
  toggleFavorite
}: {
  isFavorite: boolean;
  toggleFavorite: () => void;
}) => {
  return (
    <TouchableOpacity onPress={toggleFavorite}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={24}
        color={isFavorite ? "red" : "#F5F5F5"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default FavoriteIcon;
