// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ImageBackground,
//   ScrollView
// } from "react-native";
// import React from "react";
// import { Characters } from "@/types/interface";

// export default function DetailPage({ character }: { character: Characters }) {
//   return (
//     <ScrollView style={styles.container}>
//       <Image source={{ uri: character.images[0] }} style={styles.image} />
//       <Text style={styles.name}>
//         {character.name}
//       </Text>
//       <View style={styles.familyInfo}>
//         <Text style={styles.father}>
//           Father:{" "}
//           {character.family ? character.family.father || "Nothing" : "Nothing"}
//         </Text>
//         <Text style={styles.mother}>
//           Mother:{" "}
//           {character.family ? character.family.mother || "Nothing" : "Nothing"}
//         </Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingTop: 20,
//     backgroundColor: "#0C0C0C"
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "white",
//     marginLeft: 5
//   },
//   image: {
//     width: "100%",
//     height: 300,
//     borderRadius: 30,
//     marginBottom: 10
//   },
//   familyInfo: {
//     marginTop: 8,
//     marginLeft: 5,
//     gap: 3
//   },
//   father: {
//     fontSize: 15,
//     color: "gray"
//   },
//   mother: {
//     fontSize: 15,
//     color: "gray"
//   }
// });
import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import { Characters } from "@/types/interface";
import { LinearGradient } from "expo-linear-gradient";
import MeshGradientBackground from "./MeshGradientBackground";

export default function DetailPage({ character }: { character: Characters }) {
  return (
    <MeshGradientBackground>
      <BlurView intensity={70} style={StyleSheet.absoluteFill}>
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: character.images[0] }}
            style={styles.mainImage}
          />
          <Text style={styles.title}>Karuko's Basketball</Text>
          <Text style={styles.details}>2012–2014 • 黒子のバスケ</Text>
          <Text style={styles.rating}>⭐ 4.4</Text>

          <View style={styles.tabs}>
            <Text style={[styles.tab, styles.activeTab]}>General</Text>
            <Text style={styles.tab}>Cast</Text>
            <Text style={styles.tab}>Comments</Text>
            <Text style={styles.tab}>Lists</Text>
          </View>
        </View>
      </BlurView>
    </MeshGradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  meshGradient: {
    ...StyleSheet.absoluteFillObject, // لتغطية الشاشة بالكامل
    zIndex: -1 // لإظهار التدرج خلف المحتوى
  },

  contentContainer: {
    flex: 1,
    zIndex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 80
  },
  mainImage: {
    width: 250,
    height: 300,
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10
  },
  details: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 5
  },
  rating: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 20
  },
  tabs: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#444",
    borderRadius: 20,
    color: "white",
    fontSize: 14,
    textAlign: "center"
  },
  activeTab: {
    backgroundColor: "#e63946"
  }
});
