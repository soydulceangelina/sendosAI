import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  const { auth } = useAuth();
  return (
    <Stack.Navigator>
      {auth ? (
        <>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
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
