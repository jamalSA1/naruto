import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Characters } from "@/types/interface";
import DetailPage from "@/components/DetailPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { FAVORITE_KEY } from "@/constants/keys";

export default function Page() {
  const { id } = useLocalSearchParams();
  const [character, setCharacter] = useState<Characters | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(
    () => {
      const fetchCharacter = async () => {
        try {
          const response = await fetch(
            `https://dattebayo-api.onrender.com/characters/${id}`
          );
          const data = await response.json();
          setCharacter(data);
          checkFavorite(data);
        } catch (error) {
          console.error("error", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCharacter();
    },
    [id]
  );

  const checkFavorite = async (character: Characters) => {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITE_KEY);

      if (favorites) {
        const favoritesCharacters = JSON.parse(favorites) as Characters[];
        setIsFavorite(favoritesCharacters.some(fav => fav.id === character.id));
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITE_KEY);
      let favoritesCharacters = favorites ? JSON.parse(favorites) : [];
      if (isFavorite) {
        favoritesCharacters = favoritesCharacters.filter(
          (fav: Characters) => fav.id !== character?.id
        );
      } else {
        favoritesCharacters.push(character);
      }
      await AsyncStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify(favoritesCharacters)
      );
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("error", error);
    }
  };

  if (loading) {
    return <Text style={styles.initialText}>Loading...</Text>;
  }

  if (!character) {
    return <Text style={styles.initialText}>Character not found</Text>;
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleFavorite}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? "red" : "black"}
        />
      </TouchableOpacity>
      <DetailPage character={character} />
    </View>
  );
}

const styles = StyleSheet.create({
  initialText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 250,
    color: "gray"
  }
});
