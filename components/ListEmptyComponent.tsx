import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

interface ListEmptyComponentProps {
  loading: boolean;
  message?: string;
}

export default function ListEmptyComponent({
  loading,
  message
}: ListEmptyComponentProps) {
  return (
    <View style={styles.container}>
      {loading
        ? <ActivityIndicator size="large" color="#F5F5F5" />
        : <Text style={styles.text}>
            {message}
          </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 300
  },
  text: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
