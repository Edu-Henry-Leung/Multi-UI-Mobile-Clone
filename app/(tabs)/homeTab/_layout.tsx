import { Stack } from "expo-router";

const homeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="postDetails" options={{ headerShown: false }} />
    </Stack>
  );
};

export default homeLayout;
