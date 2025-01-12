import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>profile Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

export default Page;
