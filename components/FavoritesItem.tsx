import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Characters } from "@/types/interface";

type FavoritesItemProps = {
  item: Characters;
  removeFavorite: () => void;
};

export default function FavoritesItem({
  item,
  removeFavorite
}: FavoritesItemProps) {
  return (
    <View>
      <Text>
        {item.name}
      </Text>
      <TouchableOpacity onPress={removeFavorite}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
