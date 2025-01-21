import ListEmptyComponent from "@/components/ListEmptyComponent";
import NarutoItem from "@/components/NarutoItem";
import { Characters } from "@/types/interface";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import { useQuery } from "@tanstack/react-query";

export default function Index() {
  const fetchNaruto = async () => {
    const response = await fetch(
      "https://dattebayo-api.onrender.com/characters"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.characters;
  };

  const { data: naruto, isLoading, isError, error, refetch } = useQuery<
    Characters[]
  >({
    queryKey: ["narutoCharacters"],
    queryFn: fetchNaruto
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" style={styles.loading} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Error: {error.message}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0C0C0C" }}>
      <View style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          keyExtractor={item => item.id.toString()}
          data={naruto}
          renderItem={({ item }) => <NarutoItem item={item} />}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refetch}
              tintColor="#F5F5F5"
            />
          }
          ListEmptyComponent={
            <ListEmptyComponent
              loading={isLoading}
              message="No characters found please refresh"
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0C0C0C"
  },
  errorText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  loading: {
    marginTop: 150
  }
});
