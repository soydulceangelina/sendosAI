import { TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icons from "../components/Atoms/Icons";
import DashboardScreen from "../screens/DashboardScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("hola");
              }}
            >
              <Icons name="settings" size={30} color="#454545" />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen name="Logout" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
