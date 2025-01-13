import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useEffect, useState } from "react";
import { Characters } from "@/types/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_KEY } from "@/constants/keys";
import ListEmptyComponent from "@/components/ListEmptyComponent";

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

  useEffect(
    () => {
      fetchFavorites();
    },
    [favorites]
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

  const renderItem = ({ item }: { item: Characters }) => {
    return (
      <View>
        <Text style={styles.text}>
          {item.name}
        </Text>
        <TouchableOpacity onPress={() => removeFavorite(item)}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={() =>
          <ListEmptyComponent loading={false} message="No favorites" />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor="black"
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 50
  }
});
