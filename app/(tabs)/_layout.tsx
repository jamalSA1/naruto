import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#FF7F3E", paddingTop: 7 },
        tabBarActiveTintColor: "#F5F5F5",
        tabBarInactiveTintColor: "#FFE5CF"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) =>
            <Ionicons name="home-sharp" color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color, size }) =>
            <Ionicons name="heart-sharp" color={color} size={size} />
        }}
      />
    </Tabs>
  );
}
