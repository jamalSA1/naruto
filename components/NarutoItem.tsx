import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import { Characters } from "@/types/interface";
import { Link } from "expo-router";

const NarutoItem: React.FC<{ item: Characters }> = ({ item }) => {
  return (
    <Link href={`/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: item.images[0] }}
            style={styles.image}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                height: "10%",
                width: "60%",
                marginHorizontal: 20,
                marginTop: 20
              }}
            >
              <BlurView
                intensity={50}
                tint="dark"
                blurReductionFactor={50}
                style={[styles.nameContainer, { borderRadius: 50 }]}
              >
                <Image
                  source={{ uri: item.images[1] || item.images[0] }}
                  style={styles.mainImage}
                />
                <Text style={styles.name}>
                  {item.name}
                </Text>
              </BlurView>
              <View>
                <Text style={styles.view}>View</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "baseline",
    // marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    height: 400,
    overflow: "hidden"
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "auto",
    // height: "15%",
    overflow: "hidden"
  },
  name: {
    fontSize: 16,
    fontWeight: "light",
    color: "white",
    height: "100%",
    width: "100%"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden"
  },
  view: {
    fontSize: 13,
    color: "#BCCCDC"
  },
  mainImage: {
    width: 30,
    height: 30,
    borderRadius: 50
  }
});

export default NarutoItem;
