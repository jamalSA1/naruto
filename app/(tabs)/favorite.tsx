import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Characters } from "@/types/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_KEY } from "@/constants/keys";
import ListEmptyComponent from "@/components/ListEmptyComponent";
import FavoritesItem from "@/components/FavoritesItem";
import { useFocusEffect } from "@react-navigation/native";

export default function Page() {
  const [favorites, setFavorites] = useState<Characters[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITE_KEY);

      if (favorites) {
        setFavorites(JSON.parse(favorites));
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchFavorites();
  };

  useFocusEffect(
    useCallback(() => {
      fetchFavorites();
    }, [])
  );

  const removeFavorite = async (item: Characters) => {
    const updatedFavorites = favorites.filter(i => i.id !== item.id);
    setFavorites(updatedFavorites);
    try {
      await AsyncStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify(updatedFavorites)
      );
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Favorite. ✨</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <FavoritesItem
            items={item}
            removeFavorite={() => removeFavorite(item)}
          />}
        ListEmptyComponent={() =>
          <ListEmptyComponent loading={false} message="No favorites" />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor="black"
          />
        }
        numColumns={2}
      />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#0C0C0C",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 15,
    alignSelf: "flex-start",
    marginLeft: 20
  }
});
