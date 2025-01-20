import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";

const MeshGradientBackground = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <View style={styles.container}>
      {/* Mesh Gradient Layer */}
      <MotiView style={StyleSheet.absoluteFill}>
        {/* الجزء الأول من التدرج */}
        <LinearGradient
          colors={["#A6AEBF", "#0C0C0C"]}
          start={{ x: -1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientBase}
        />

        {/* دوائر الـ Mesh */}
        <MotiView
          from={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ type: "timing", duration: 2000, loop: true }}
          style={[styles.meshCircle, { top: "10%", left: "20%" }]}
        />

        <MotiView
          from={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0.8, scale: 1.1 }}
          transition={{ type: "timing", duration: 2000, loop: true }}
          style={[styles.meshCircle, { top: "50%", right: "20%" }]}
        />
      </MotiView>

      {/* Blur Overlay */}
      <BlurView intensity={20} style={StyleSheet.absoluteFill} tint="dark">
        <View style={styles.content}>
          {children}
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C0C"
  },
  gradientBase: {
    ...StyleSheet.absoluteFillObject
  },
  meshCircle: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "rgba(64, 64, 64, 0.2)"
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
});

export default MeshGradientBackground;
