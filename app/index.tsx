import ListEmptyComponent from "@/components/ListEmptyComponent";
import NarutoItem from "@/components/NarutoItem";
import { Characters, Films } from "@/types/interface";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, RefreshControl } from "react-native";

export default function Index() {
  const [naruto, setNaruto] = useState<Characters[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchNaruto = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://dattebayo-api.onrender.com/characters"
      );
      const data = await response.json();
      setNaruto(data.characters);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNaruto();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchNaruto();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={item => item.id.toString()}
        data={naruto}
        renderItem={({ item }) => <NarutoItem item={item} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor="black"
          />
        }
        ListEmptyComponent={
          <ListEmptyComponent
            loading={loading}
            message="No characters found please refresh"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    width: "100%"
  }
});
