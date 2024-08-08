import { TouchableOpacity, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icons from "../components/Atoms/Icons";
import DashboardScreen from "../screens/DashboardScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerLeft: () => (
            <Text className="ml-4 text-2xl font-bold text-gray-300">
              Elige tu sendero
            </Text>
          ),
          headerTitle: () => null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icons name="settings" size={35} color="#454545" />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen name="Logout" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
