import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import { Characters } from "@/types/interface";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Image } from "expo-image";

const NarutoItem: React.FC<{ item: Characters }> = ({ item }) => {
  return (
    <Link href={`/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: item.images[0] }}
              style={styles.backgroundImage}
              transition={1000}
              contentFit="cover"
              onLoad={() => {}}
            />
          </View>
          <View style={styles.rowContainer}>
            <BlurView
              intensity={Platform.OS === "web" ? 20 : 50} // تقليل البلور في الويب لتحسين الأداء
              tint="dark"
              blurReductionFactor={50}
              style={styles.nameContainer}
            >
              <Image
                source={{ uri: item.images[1] || item.images[0] }}
                style={styles.mainImage}
              />
              <Text style={styles.name}>
                {item.name}
              </Text>
            </BlurView>
            <View style={{ flex: 0.8 }} />
            <View style={styles.viewContainer}>
              <Ionicons name="eye-outline" size={20} color="#9AA6B2" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "baseline",
    marginHorizontal: 10,
    padding: 5,
    marginBottom: 10,
    height: 400,
    overflow: "hidden"
  },
  imageWrapper: {
    borderRadius: 30,
    overflow: Platform.OS === "web" ? "visible" : "hidden", // إصلاح المشكلة على الويب
    width: Platform.OS === "web" ? "60%" : "100%",
    height: Platform.OS === "web" ? 500 : 400,
    position: "absolute"
  },
  backgroundImage: {
    width: Platform.OS === "web" ? "40%" : "100%",
    height: Platform.OS === "web" ? 500 : 400,
    borderRadius: 30,
    ...Platform.OS === "web" && { clipPath: "inset(0 round 30px)" } // إصلاح الويب
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 10
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 50,
    overflow: Platform.OS === "web" ? "visible" : "hidden"
  },
  name: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    marginRight: 10
  },
  mainImage: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  viewContainer: {
    marginLeft: 20,
    backgroundColor: "white",
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50
  }
});

export default NarutoItem;
