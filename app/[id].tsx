import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { Characters } from "@/types/interface";
import DetailPage from "@/components/DetailPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { FAVORITE_KEY } from "@/constants/keys";
import FavoriteIcon from "@/components/FavoriteIcon";

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
        const isFavorite = favoritesCharacters.some(fav => fav.id === character.id);
        setIsFavorite(isFavorite);
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
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" style={styles.loading} />
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.initialText}>Character not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => <FavoriteIcon isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
        }}
      />
      <DetailPage character={character} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C0C",
  },
  loading: {
    marginTop: 250
  },
  initialText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 250,
    color: "#F5F5F5"
  }
});
