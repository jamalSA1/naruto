import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#191919",
          height: 80,
          borderTopWidth: 0,
          paddingTop: 5
        },
        tabBarActiveTintColor: "#F5F5F5",
        tabBarInactiveTintColor: "#EEEEEE",
        tabBarActiveBackgroundColor: "#fff",
        tabBarItemStyle: {
          height: 46,
          width: "30%",
          borderRadius: 50,
          overflow: "hidden",
          top: 5,
          marginHorizontal: 73,
          marginBottom: 20
        },
        tabBarIconStyle: { position: "absolute", top: 10 }
      } // تطبيق الحواف الدائرية
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) =>
            <AntDesign
              name="home"
              size={focused ? 26 : 24}
              color={focused ? "#000" : color}
            />
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color, size, focused }) =>
            <Fontisto
              name="heart-alt"
              size={focused ? 24 : 22}
              color={focused ? "#000" : color}
            />
        }}
      />
    </Tabs>
  );
}
