import { SafeAreaView, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import Icons from "../components/Atoms/Icons";
import UserDashboard from "../components/Organisms/UserDashboard";

export default function DashboardScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity className="mr-4" onPress={() => navigation.openDrawer()}>
          <Icons name="settings" size={35} color="#454545" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView className="h-screen bg-white ">
      <UserDashboard />
    </SafeAreaView>
  );
}
