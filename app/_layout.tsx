import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
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
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) =>
            <Ionicons name="person-sharp" color={color} size={size} />
        }}
      />
    </Tabs>
  );
}
