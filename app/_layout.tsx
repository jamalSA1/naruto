import { router, Stack, Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackIcon from "../assets/icons/backIcon";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="[id]"
          options={{
            headerShown: true,
            headerLargeTitleShadowVisible: false,
            headerTitle: "Character Details",
            headerTintColor: "#F5F5F5",
            headerStyle: { backgroundColor: "#191919" },
            headerTitleAlign: "center",
            headerLeft: () =>
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
              >
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#F5F5F5"
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
