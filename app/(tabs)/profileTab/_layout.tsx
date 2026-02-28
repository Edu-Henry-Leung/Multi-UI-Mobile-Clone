import { Stack } from "expo-router";

const profileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default profileLayout;
