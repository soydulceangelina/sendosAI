import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import LoginScreen from "../screens/LoginScreen";
import NavigationDrawer from "./NavigationDrawer";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  const { auth } = useAuth();
  return (
    <Stack.Navigator>
      {auth ? (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={NavigationDrawer}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
